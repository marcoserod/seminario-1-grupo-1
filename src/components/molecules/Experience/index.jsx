import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const options = {
  year: "numeric",
  month: "long",
};

export const Experience = ({ experience }) => {
  return (
    <Paper elevation={0} style={{ padding: "20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar src={experience.img} variant="square" />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            {experience.jobTitle}
          </Typography>
          <Box
            sx={{
              textAlign: "left",
              mt: 1,
              color: "gray",
              display: { xs: "block", md: "flex" },
              alignItems: "center",
            }}
          >
            <div>
              {new Date(experience.startDate).toLocaleDateString("es", options)}
              - {new Date(experience.endDate).toLocaleDateString("es", options)}
            </div>
          </Box>
          <p style={{ textAlign: "left" }}>{experience.jobDescription}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};
