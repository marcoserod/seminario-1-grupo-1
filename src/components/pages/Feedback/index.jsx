import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export const SendFeedback = () => {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom alignSelf="center">
        ¿Cómo podemos mejorar?
      </Typography>
      <Box
        id="feedback"
        component="form"
        noValidate
        action="POST"
        data-netlify="true"
      >
        <TextField
          margin="dense"
          name="name"
          fullWidth
          id="name"
          label="Nombre"
          autoFocus
        />
        <TextField
          margin="dense"
          name="message"
          required
          fullWidth
          id="message"
          label="Mensaje"
          multiline
          minRows={5}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enviar
        </Button>
        <Box data-netlify-recaptcha="true" />
      </Box>
    </Container>
  );
};
