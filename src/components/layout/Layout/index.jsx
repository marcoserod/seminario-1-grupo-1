import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import { cloneElement } from "react";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{ color: "unset" }}
              >
                <Typography variant="h6" component="div">
                  <span>Mentor</span>
                  <span style={{ fontStyle: "italic" }}>e</span>
                  <span style={{ fontWeight: "bold" }}>AR</span>
                </Typography>
              </Link>
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
