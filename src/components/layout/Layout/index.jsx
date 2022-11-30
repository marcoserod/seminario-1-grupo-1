import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import { cloneElement, useEffect, useState } from "react";
import {
  Avatar,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  DashboardOutlined,
  FeedbackOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import { ReactComponent as FilledLogo } from "../../../assets/SShipFilledLogo.svg";
import miguel from "../../../assets/Miguel.jpeg";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isDrawerOpen && toggleDrawer();
  }, [location]);

  const pages = [
    {
      route: "/dashboard/",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      route: "/feedback/",
      icon: <FeedbackOutlined />,
      label: "Feedback",
    },
    {
      route: "/mentor/register/",
      icon: <SchoolOutlined />,
      label: "Quiero ser mentor",
    },
  ];
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
                to="/dashboard/"
                sx={{
                  color: "unset",
                  mr: 2,
                  display: { xs: "none", sm: "unset" },
                }}
              >
                DASHBOARD
              </Link>
              <Link
                underline="hover"
                component={RouterLink}
                to="/feedback/"
                sx={{
                  color: "unset",
                  mr: 2,
                  display: { xs: "none", sm: "unset" },
                }}
              >
                FEEDBACK
              </Link>
              <IconButton onClick={toggleDrawer}>
                <Avatar src={miguel} />
              </IconButton>
              <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                  {pages.map(({ label, icon, route }, index) => (
                    <ListItem
                      button
                      to={route}
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      disablePadding
                      component={RouterLink}
                    >
                      <ListItemButton selected={location.pathname === route}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
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
