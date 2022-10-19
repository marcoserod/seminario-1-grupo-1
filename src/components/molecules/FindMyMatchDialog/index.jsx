import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const FindMyMatchDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        ¿Qué es encontrar mi match? 🤔
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Vamos a buscar al mentor que mayor concidencia tenga entre sus
          habilidades y tus intereses cargados en tu perfil, o los que quieras
          agregar.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Prefiero seguir buscando
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          autoFocus
          component={Link}
          to="/mentor/match"
        >
          Vamos a buscar mi mentor ideal
        </Button>
      </DialogActions>
    </Dialog>
  );
};
