import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { db } from "../../../db/db";

export const Dashboard = () => {
  const { applications } = db.loggedUser;

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
              Solicitudes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              {applications.map((a) => (
                <Grid item>
                  <Card sx={{ maxWidth: 220 }}>
                    <CardHeader
                      avatar={
                        <Avatar
                          alt="Remy Sharp"
                          src={
                            db.mentors.find(
                              (mentor) => mentor.id === a.mentorID
                            )?.img
                          }
                        />
                      }
                      title={
                        db.mentors.find((mentor) => mentor.id === a.mentorID)
                          ?.name
                      }
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};
