import { ExpandMore, FindInPage } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { db } from "../../../db/db";
import { Storage } from "../../../utils/Storage";

const options = {
  month: "long",
  day: "numeric",
};

export const Dashboard = () => {
  const [cachedApplications] = Storage("applications", true);
  const applications = cachedApplications || [];
  const navigateTo = useNavigate();

  const handleRedirect = () => {
    navigateTo("/mentor/search?sort=recommended&view=list&qtyView=1");
  };

  return (
    <Box>
      <Container maxWidth="false">
        <Accordion
          defaultExpanded
          elevation={0}
          sx={{ scrollMarginTop: "50px  " }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              Solicitudes pendientes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              {applications.length ? (
                applications.map((a) => (
                  <Grid item>
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar
                            alt="Remy Sharp"
                            sx={{ width: 56, height: 56 }}
                            src={
                              db.mentors.find(
                                (mentor) => mentor.id === a.mentorID
                              )?.img
                            }
                          />
                        }
                        title={`Contactaste a ${
                          db.mentors.find((mentor) => mentor.id === a.mentorID)
                            ?.name
                        }`}
                        subheader={new Date(a.date).toLocaleDateString(
                          "es",
                          options
                        )}
                      />
                      <CardContent>
                        <Typography variant="subtitle">
                          Esperando respuesta
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid
                  item
                  xs={12}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    border: (theme) =>
                      `1px solid ${theme.palette.primary.light}`,
                    padding: 2,
                    borderRadius: "1rem",
                  }}
                >
                  <FindInPage fontSize="large" color="disabled" />
                  <Typography variant="body" m={1}>
                    {" "}
                    No hay solicitudes pendientes, contacta a un mentor
                  </Typography>
                  <Button variant="contained" onClick={handleRedirect}>
                    {" "}
                    Buscar mentor
                  </Button>
                </Grid>
              )}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          elevation={0}
          sx={{ scrollMarginTop: "50px  " }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              Tus mentorias
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                  border: (theme) => `1px solid ${theme.palette.primary.light}`,
                  padding: 2,
                  borderRadius: "1rem",
                }}
              >
                <FindInPage fontSize="large" color="disabled" />
                <Typography variant="body" m={1}>
                  {" "}
                  Aun no tienes una mentoria activa
                </Typography>
                <Button variant="contained" onClick={handleRedirect}>
                  {" "}
                  Buscar mentor
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};
