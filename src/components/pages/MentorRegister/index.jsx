import {
  Alert,
  AlertTitle,
  Autocomplete,
  Avatar,
  Button,
  FormControl,
  Grid,
  Link,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";

import { UploadFile } from "@mui/icons-material";
import { db } from "../../../db/db";
import miguel from "../../../assets/Miguel.jpeg";

export const MentorRegister = () => {
  const [previewImg, setPreviewImg] = useState("");

  const steps = ["Sobre vos", "Perfil", "Experiencia"];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      dni: "40100200",
      firstName: "Miguel",
      lastName: "Migueles",
      email: "miguelmigueles@gmail.com",
      password: "1234556",
      jobTitle: "Back-end developer",
      company: "Mercado Libre",
      about:
        "Mi nombre es Miguel y soy desarrollador backend con 5 años de experiencia.",
      linkedIn: "https://www.linkedin.com/miguelmigueles",
      web: "https://github.com/miguelmigueles",
      expectation:
        "Poder ayudar a quienes recién comiencen en el hermoso rubro IT a crecer, como me han ayudado a mí desde un comienzo. Aportar todo mi conocimiento.",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleUpload = (e) => {
    const newImage = e.target?.files?.[0];
    if (newImage) {
      setPreviewImg(URL.createObjectURL(newImage));
    }
  };

  return (
    <Container>
      <Typography
        mt={2}
        variant="h1"
        fontSize="2rem"
        fontWeight="bold"
        gutterBottom
      >
        Aplicar como mentor
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
              <>
                <Alert severity="info">
                  <AlertTitle>Bienvenido</AlertTitle>
                  <Typography>
                    Al llenar este formularios nos permites conocerte en
                    detalle, y que te motiva a ser un mentor. Solo te llevara
                    unos minutos.
                  </Typography>
                  <br />
                  Al completar y enviar esta solicitud, estas aceptando nuestros{" "}
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
                <Grid container spacing={2} mt={1}>
                  <Grid item xs={3} display="flex" justifyContent="center">
                    <Avatar
                      src={previewImg || miguel}
                      sx={{ height: 64, width: 64 }}
                    />
                  </Grid>
                  <Grid item xs={3} display="flex" alignItems="center">
                    <Button
                      fullWidth
                      variant="outlined"
                      component="label"
                      startIcon={<UploadFile />}
                    >
                      Subir foto
                      <input
                        hidden
                        accept="image/*"
                        multiple={false}
                        type="file"
                        onChange={handleUpload}
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="dni"
                      required
                      fullWidth
                      id="dni"
                      label="DNI"
                      value={formik.values.dni}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Nombre"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Apellido"
                      name="lastName"
                      autoComplete="family-name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="jobTitle"
                      label="Puesto actual"
                      id="jobTitle"
                      value={formik.values.jobTitle}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="company"
                      label="Empresa"
                      id="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
              </>
            )}
            {activeStep === 1 && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    name="about"
                    required
                    fullWidth
                    id="about"
                    label="Biografia"
                    value={formik.values.about}
                    onChange={formik.handleChange}
                    multiline
                    minRows={3}
                    helperText="Cuentanos sobre ti."
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ width: "100%" }}>
                    <Autocomplete
                      value={[
                        "JavaScript",
                        "Web Development",
                        "NodeJS",
                        "Architecture",
                        "SQL",
                        "MySQL",
                        "MongoDB",
                        "Web",
                      ]}
                      fullWidth
                      multiple
                      options={db.skills}
                      getOptionLabel={(option) => option}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          required
                          variant="outlined"
                          label="Tus habilidades"
                          placeholder="Buscar habilidades"
                          helperText="Lista de tus habilidades, los mentees te buscaran a traves de ellas"
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="linkedIn"
                    label="LinkedIn URL"
                    id="linkedIn"
                    value={formik.values.linkedIn}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="web"
                    label="Tu pagina personal"
                    id="web"
                    value={formik.values.web}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            )}
            {activeStep === 2 && (
              <TextField
                margin="dense"
                variant="outlined"
                name="expectation"
                required
                fullWidth
                id="expectation"
                label="¿Que te motiva a ser un mentor?"
                value={formik.values.expectation}
                onChange={formik.handleChange}
                multiline
                minRows={3}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep !== 3 && (
              <>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Anterior
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleNext}>
                  {" "}
                  {activeStep === steps.length - 1 ? "Aplicar" : "Siguiente"}
                </Button>
              </>
            )}
            {activeStep === 3 && (
              <Box
                sx={{
                  margin: "0 auto",
                }}
              >
                <Alert severity="success">
                  <AlertTitle>Felicitaciones</AlertTitle>
                  Vamos a revisar tu solitud para comprobar si eres elegible
                  como mentor. Te informaremos a tu mail:{" "}
                  <strong>{formik.values.email}</strong>.
                </Alert>

                <Button
                  component={RouterLink}
                  to="/"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Volver al inicio
                </Button>
              </Box>
            )}
          </Box>
        </>
      </Box>
    </Container>
  );
};
