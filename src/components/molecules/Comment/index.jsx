import { Avatar, Box, Grid, Paper, Rating, Typography } from "@mui/material";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const Comment = ({ review }) => {
  return (
    <Paper elevation={0} style={{ padding: "20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={review.img} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            {review.studentName}
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
            <Rating
              sx={{ mr: 1 }}
              value={review.rating || 0}
              readOnly
              precision={0.5}
            />
            <div>
              {new Date(review.comment.date).toLocaleDateString(
                undefined,
                options
              )}
            </div>
          </Box>
          <p style={{ textAlign: "left" }}>{review.comment.message}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};
