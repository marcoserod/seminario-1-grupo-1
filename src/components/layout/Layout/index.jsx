import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import { cloneElement } from "react";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundImage: (theme) => theme.palette.primary.mainGradient,
          }}
        >
          <Container disableGutters>
            <Toolbar>
              <Typography variant="h6" component="div">
                MentorAR
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container maxWidth="false" disableGutters>
        {children}
      </Container>
    </>
  );
}
