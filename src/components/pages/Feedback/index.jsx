import { Alert, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SendFeedback = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

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
      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          ¡Gracias por ayudarnos a mejorar!🙂{" "}
        </Alert>
      )}
      {!success ? (
        <>
          <Typography
            variant="h5"
            gutterBottom
            alignSelf="center"
            color="primary"
          >
            ¿Cómo podemos mejorar?
          </Typography>
          <form
            name="feedback"
            method="POST"
            data-netlify="true"
            action="/feedback/?success=true"
          >
            <input type="hidden" name="form-name" value="feedback" />
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
          </form>
        </>
      ) : (
        <Button
          component={Link}
          to="/"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Volver al inicio
        </Button>
      )}
    </Container>
  );
};
