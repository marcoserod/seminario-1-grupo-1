import styled from "@emotion/styled";
import {
  Call,
  ChatOutlined,
  MailOutline,
  OfflineBoltOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";

import { Link } from "react-router-dom";

export default function MentorCard({ data }) {
  const StyledCard = styled(Card)`
    border-radius: 1rem;
    border: 1.5px solid #95acff;
    background-color: #eeeeee50;
  `;

  return (
    <StyledCard sx={{ minWidth: 275 }} elevation={0}>
      <CardContent>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 30% 50% 20%)",
            gap: 1,
            gridTemplateRows: "100px auto auto ",
            gridTemplateAreas: {
              md: `
                "sider main  services"
                "sider main  services"
                "sider main  services"
                `,
              xs: `
              "sider sider sider"
              "sider sider sider"
              "main main main"
              "main main main"
                `,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              gridArea: "sider",
              borderRight: "1px solid",
              borderColor: "grey.200",
              pr: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Rating value={data.rating} readOnly size="medium" />
            <Avatar
              src={data.img}
              sx={{
                maxWidth: "250px",
                maxHeight: "250px",
                width: "100%",
                height: "100%",
                fontSize: "2rem",
                alignSelf: "center",
              }}
            />
          </Box>
          <Box
            sx={{
              gridArea: "main",
              borderRight: "1px solid",
              borderColor: "grey.200",
              pr: 1,
            }}
          >
            <Stack>
              <Typography color="primary.dark" variant="h5">
                {data.name}
              </Typography>
              <Typography color="primary.dark" gutterBottom>
                {data.jobTitle}
                <strong>{` @${data.jobCompany}`}</strong>
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxHeight: "100px",
                  overflowY: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {data.description}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Grid container spacing={1}>
                {data.skills.slice(0, 4).map((skill) => (
                  <Grid item key={skill}>
                    <Chip label={skill} />
                  </Grid>
                ))}
                {data.skills.length - 4 > 0 && (
                  <Grid item key="plus-skills">
                    <Chip
                      label={`+${data.skills.length - 4}`}
                      color="primary"
                    />
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Box>
          <Box
            sx={{
              gridArea: "services",
              display: { xs: "none", md: "unset" },
            }}
          >
            <Stack>
              <Typography color="primary.dark" variant="subtitle1" gutterBottom>
                ¿Qué ofrece?
              </Typography>
              <Divider />
              {data.services.includes("fast-replies") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <OfflineBoltOutlined fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption" gutterBottom>
                    Responde rápido
                  </Typography>
                  <Divider />
                </>
              )}
              {data.services.includes("free-mail") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <ChatOutlined fontSize="1rem" color="primary" />
                    <MailOutline fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption" gutterBottom>
                    Chat, correo electrónico o texto ilimitados dentro de los
                    límites acordados con el mentor.
                  </Typography>
                  <Divider />
                </>
              )}
              {data.services.includes("monthly-calls") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <Call fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption">
                    Hasta 1 llamada por mes
                  </Typography>
                  <Divider />
                </>
              )}
              {data.services.includes("weekly-calls") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <Call fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption">
                    Hasta 4 llamada por mes
                  </Typography>
                  <Divider />
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/mentor/${data.id}`}
          fullWidth
          variant="text"
        >
          Ver perfil
        </Button>
      </CardActions>
    </StyledCard>
  );
}
