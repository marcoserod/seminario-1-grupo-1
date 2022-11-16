import {
  CheckCircleOutlineOutlined,
  CloseOutlined,
  SentimentDissatisfiedRounded,
  SentimentSatisfiedAltRounded,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export const PercentageDetail = ({
  open,
  handleClose,
  matchedSkills,
  unmatchedSkills,
  name,
}) => {
  return (
    <Dialog
      maxWidth="lg"
      fullWidth
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      onClose={handleClose}
      scroll="paper"
    >
      <DialogTitle
        color="primary"
        id="alert-dialog-title"
        sx={{ textAlign: "center ", color: "primary" }}
      >
        ¿Cómo coincidí con {name}?
      </DialogTitle>
      <DialogContent>
        <Grid container justifyContent="space-around" columnSpacing={2}>
          <Grid item xs={12} md={6} sx={{ alignSelf: "stretch" }}>
            <Stack
              sx={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <CheckCircleOutlineOutlined color="success" fontSize="large" />
              Comparten
              <Box
                sx={{
                  mt: 1,
                  border: (theme) => `1px solid ${theme.palette.success.main}`,
                  bgcolor: (theme) => `${theme.palette.success.light}10`,
                  borderRadius: 1,
                  width: "100%",
                  height: "100%",
                  p: 1,
                }}
              >
                <Grid container columnSpacing={1} rowSpacing={1}>
                  {matchedSkills?.map((item) => (
                    <Grid item key={item}>
                      <Chip label={item} color="success" />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ alignSelf: "stretch" }}>
            <Stack
              sx={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <CloseOutlined color="error" fontSize="large" />
              No comparten
              <Box
                sx={{
                  mt: 1,
                  border: (theme) => `1px solid ${theme.palette.error.main}`,
                  bgcolor: (theme) => `${theme.palette.error.light}10`,
                  borderRadius: 1,
                  width: "100%",
                  height: "100%",
                  p: 1,
                }}
              >
                <Grid container columnSpacing={1} rowSpacing={1}>
                  {unmatchedSkills?.map((item) => (
                    <Grid item key={item}>
                      <Chip label={item} color="error" />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
