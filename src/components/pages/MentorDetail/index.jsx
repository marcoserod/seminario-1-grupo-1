import {
  Call,
  ExpandMore,
  GitHub,
  LinkedIn,
  MailOutline,
  OfflineBoltOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useRef } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../../db/db";
import { Comment } from "../../molecules/Comment";
import mentorApp from "../../../assets/MentorearAPP.avif";
import medium from "../../../assets/medium.webp";

export const MentorDetail = () => {
  const { mentorID } = useParams();
  const data = db.mentors.find((mentor) => mentor.id.toString() === mentorID);
  const skillRef = useRef(null);

  const handleGoToSkills = () => {
    skillRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box paddingBottom="10rem">
      <Box
        sx={{
          backgroundImage: (theme) => theme.palette.primary.mainGradient,
        }}
      >
        <Container sx={{ display: "flex" }}>
          <Avatar
            src={data.img}
            sx={{
              maxWidth: "180px",
              maxHeight: "180px",
              width: "100%",
              height: "100%",
              fontSize: "2rem",
              alignSelf: "center",
              transform: "translateY(3rem)",
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box alignSelf="flex-end">
            <IconButton
              component={Link}
              href="https://github.com/"
              target="_blank"
            >
              <GitHub sx={{ fill: "#FFF" }} fontSize="large" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <LinkedIn sx={{ fill: "#FFF" }} fontSize="large" />
            </IconButton>
          </Box>
        </Container>
      </Box>
      <Container sx={{ marginTop: "4rem" }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Stack>
              <Rating
                value={data.rating}
                readOnly
                size="medium"
                precision={0.5}
              />
              <Typography color="primary.dark" variant="h4">
                {data.name}
              </Typography>
              <Typography color="primary.dark" gutterBottom>
                {data.jobTitle}
                <strong>{` @${data.jobCompany} `}</strong>
                <Chip
                  component="span"
                  label={`+${data.exp} exp`}
                  color="primary"
                  variant="outlined"
                />
              </Typography>
            </Stack>
            <Grid container columnGap={2} rowSpacing={2} mt={1} mb={4}>
              {data.services.includes("fast-replies") && (
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <OfflineBoltOutlined color="primary" />
                  <Typography ml={1} color="primary" variant="subtitle2">
                    Responde rápido
                  </Typography>
                </Grid>
              )}
              {data.services.includes("free-mail") && (
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <MailOutline color="primary" />
                  <Typography
                    color="primary"
                    variant="subtitle2"
                    sx={{ textDecoration: "underline", ml: 1 }}
                  >
                    <Tooltip title="No limitaremos la interacción con el mentor, pero existe un limite practico a la cantidad de mensajes que este podrá responder">
                      <span>Chat, correo electrónico o texto ilimitados</span>
                    </Tooltip>
                  </Typography>
                </Grid>
              )}
              {data.services.includes("monthly-calls") && (
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Call color="primary" />
                  <Typography color="primary" variant="subtitle2" ml={1}>
                    Llamadas x 1
                  </Typography>
                </Grid>
              )}
              {data.services.includes("weekly-calls") && (
                <Grid item sx={{ display: "flex", alignItems: "center" }}>
                  <Call color="primary" />
                  <Typography color="primary" variant="subtitle2" ml={1}>
                    LLamadas x 4
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <Typography color="primary" gutterBottom>
                Hábilidades
              </Typography>
              <Grid container spacing={1}>
                {data.skills.slice(0, 4).map((skill) => (
                  <Grid item key={skill}>
                    <Chip label={skill} />
                  </Grid>
                ))}
                {data.skills.length - 4 > 0 && (
                  <Grid item key="plus-skills">
                    <IconButton color="primary" onClick={handleGoToSkills}>{`+${
                      data.skills.length - 4
                    }`}</IconButton>
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mb: 1, mt: 1 }} />
      <Container>
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              Sobre mí
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" gutterBottom>
              {data.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container>
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              Comentarios
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container rowSpacing={2}>
              {data.reviews.map((review) => (
                <Comment key={review.id} review={review} />
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container>
        <Accordion defaultExpanded elevation={0} ref={skillRef}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              Habilidades
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              {data.skills.map((skill) => (
                <Grid item key={skill}>
                  <Chip label={skill} />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container>
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" variant="h6" sx={{ fontWeight: 600 }}>
              Más sobre {data.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item key="web">
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="150px"
                    src={mentorApp}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mi Página web
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Soy {data.name}, y esta es mi página web, te invito a
                      conocerme.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key="article">
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="150px"
                    src={medium}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mi Artículo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Soy {data.name}, y este es mi artículo web, te invito a
                      leerlo.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};
