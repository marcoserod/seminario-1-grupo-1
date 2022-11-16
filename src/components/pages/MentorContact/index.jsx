import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Check } from "@mui/icons-material";
import { db } from "../../../db/db";
import { Storage } from "../../../utils/Storage";
import { Toast } from "../../molecules/Toast";

export const MentorContact = () => {
  const { mentorID } = useParams();
  const navigateTo = useNavigate();
  const data = db.mentors.find((mentor) => mentor.id.toString() === mentorID);
  const [cachedApplications, setCachedApplications] = Storage(
    "applications",
    true
  );

  const steps = ["Sobre vos", "Objetivos", "Expectativas"];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      about:
        "Soy una desarrolladora trainee de react, estoy buscando un mentor para mejorar mis habilidades.",
      situation: "student",
      goal: "Mi objetivo es subir de seniority como desarrolladora, yo por mi parte realice diversos proyectos personales.",
      expectation: "Guiándome sobre qué camino en la carrera elegir.",
    },
    onSubmit: (values) => {
      const newApplications = cachedApplications || [];
      newApplications.push({
        ...values,
        mentorID: data.id,
        status: "pending",
        date: new Date(),
      });
      setCachedApplications(newApplications);
      Toast(`Tu solicitud a ${data.name} ha sido enviada. Vamos al dashboard!`);
      navigateTo("/dashboard");
    },
  });

  return (
    <Container>
      <Typography
        mt={2}
        variant="h1"
        fontSize="2rem"
        fontWeight="bold"
        gutterBottom
      >
        Contactar a {data.name}{" "}
      </Typography>

      <Box
        id="hireForm"
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{
          margin: "3rem auto 0",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <>
          <Box m={4}>
            {activeStep === 0 && (
              <TextField
                variant="outlined"
                name="about"
                required
                fullWidth
                id="about"
                label="Cuentale sobre ti al mentor"
                value={formik.values.about}
                onChange={formik.handleChange}
                multiline
                minRows={3}
              />
            )}
            {activeStep === 1 && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="situation">
                      ¿Qué describe mejor tu situación?
                    </InputLabel>
                    <Select
                      name="situation"
                      labelId="situation"
                      label="¿Qué describe mejor tu situación?"
                      value={formik.values.situation}
                      onChange={formik.handleChange}
                      required
                    >
                      <MenuItem value="student">
                        Soy un estudiante y necesito ayuda con mis estudios.
                      </MenuItem>
                      <MenuItem value="just-graduated">
                        Recién graduado y necesito ayuda con mi primer empleo.
                      </MenuItem>
                      <MenuItem value="change">
                        Quiero cambiar de carrera o de trabajo.
                      </MenuItem>
                      <MenuItem value="personal">
                        Quiero una mentoria para mis emprendimientos.
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    name="goal"
                    required
                    fullWidth
                    id="goal"
                    label="¿Cuál es tu objetivo y que has hecho hasta el momento para alcanzarlo?"
                    value={formik.values.goal}
                    onChange={formik.handleChange}
                    multiline
                    minRows={3}
                  />
                </Grid>
              </Grid>
            )}
            {activeStep === 2 && (
              <>
                <Alert severity="info">
                  Al completar y enviar esta solicitud, estas acetando nuestros{" "}
                  <Link
                    component={RouterLink}
                    to="/termsAndConditions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Términos y Condiciones de uso
                  </Link>
                  .
                </Alert>
                <Alert severity="info" sx={{ marginTop: "1rem" }}>
                  <AlertTitle>
                    Estas por aplicar a la mentoria de{" "}
                    <strong>{data.name}</strong>
                  </AlertTitle>
                  <List>
                    <ListSubheader sx={{ backgroundColor: "unset" }}>
                      Accedes a:
                    </ListSubheader>
                    {data.services.includes("fast-replies") && (
                      <ListItem>
                        <ListItemIcon>
                          <Check />
                        </ListItemIcon>
                        Respuestas rápidas
                      </ListItem>
                    )}
                    {data.services.includes("free-mail") && (
                      <ListItem>
                        <ListItemIcon>
                          <Check />
                        </ListItemIcon>
                        Chat, correo electrónico o texto ilimitados
                      </ListItem>
                    )}
                    {data.services.includes("monthly-calls") && (
                      <ListItem>
                        <ListItemIcon>
                          <Check />
                        </ListItemIcon>
                        Llamadas mensuales
                      </ListItem>
                    )}
                    {data.services.includes("weekly-calls") && (
                      <ListItem>
                        <ListItemIcon>
                          <Check />
                        </ListItemIcon>
                        Llamadas semanales
                      </ListItem>
                    )}
                  </List>
                </Alert>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="expectation"
                  required
                  fullWidth
                  id="expectation"
                  label="¿Cómo crees que puede ayudarte un mentor?"
                  value={formik.values.expectation}
                  onChange={formik.handleChange}
                  multiline
                  minRows={3}
                />
              </>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Anterior
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep !== 2 && (
              <Button onClick={handleNext}>Siguiente</Button>
            )}
            {activeStep === 2 && (
              <Button onClick={formik.handleSubmit}>Aplicar</Button>
            )}
          </Box>
        </>
      </Box>
    </Container>
  );
};
