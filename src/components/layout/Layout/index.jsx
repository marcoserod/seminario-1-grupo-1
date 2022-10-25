import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import { cloneElement } from "react";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { ReactComponent as FilledLogo } from "../../../assets/SShipFilledLogo.svg";

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

const StyledSvg = styled.span`
  svg {
    width: 2.5rem;
    height: auto;
    path {
      fill: #fff7f0;
    }
  }
`;

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
          <Container disableGutters maxWidth="false">
            <Toolbar>
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{ color: "unset" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: () => ({
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 1,
                          duration: 0.75,
                          ease: "backInOut",
                        },
                      }),
                      hidden: { opacity: 0, x: -100 },
                    }}
                    className=""
                  >
                    <span style={{ fontWeight: "bold" }}>Mentor</span>
                  </motion.span>
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: () => ({
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 1,
                          duration: 0.75,
                          ease: "backInOut",
                        },
                      }),
                      hidden: { opacity: 1, x: -60 },
                    }}
                    className=""
                  >
                    <StyledSvg>
                      <FilledLogo />
                    </StyledSvg>
                  </motion.span>

                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: () => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 1,
                          duration: 0.75,
                          ease: "backInOut",
                        },
                      }),
                      hidden: { opacity: 0, y: -100 },
                    }}
                    className=""
                  >
                    <span style={{ fontWeight: "bold" }}>hip</span>
                  </motion.span>
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Link
                underline="hover"
                component={RouterLink}
                to="/feedback/"
                sx={{ color: "unset" }}
              >
                FEEDBACK
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
