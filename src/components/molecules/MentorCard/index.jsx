import styled from "@emotion/styled";
import {
  Call,
  ChatOutlined,
  MailOutline,
  OfflineBoltOutlined,
  ThumbUpAltRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

import { Link } from "react-router-dom";
import { PercentageDetail } from "../../pages/MatchFinder/PercentageDetail";

export default function MentorCard({
  data,
  percentage,
  view,
  matchedSkills,
  unmatchedSkills,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const StyledCard = styled(Card)`
    border-radius: 1rem;
    border: 1.5px solid #95acff;
    background-color: #eeeeee50;
  `;

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      padding: "4px 8px",
      height: "auto",
      fontSize: "1.5rem",
      borderRadius: "2rem",
    },
  }));

  const getColor = (percentage) => {
    if (percentage >= 70) return "success";
    if (percentage >= 30) return "warning";
    return "error";
  };

  return (
    <StyledCard
      sx={{
        minWidth: 275,
        maxWidth: { xs: "unset", md: view === "column" ? 330 : "unset" },
      }}
      elevation={0}
    >
      <PercentageDetail
        open={open}
        handleClose={handleOpen}
        matchedSkills={matchedSkills}
        unmatchedSkills={unmatchedSkills}
        name={data.name}
      />
      <CardContent>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 20% 50% 30%)",
            gap: 1,
            gridTemplateRows: "100px auto auto ",
            gridTemplateAreas: {
              md:
                view === "list"
                  ? `
                "sider main  services"
                "sider main  services"
                "sider main  services"
                `
                  : `
                "sider sider sider"
                "sider sider sider"
                "main main main"
                "main main main"
                  `,
              xs: `
              "sider sider sider"
              "sider sider sider"
              "main main main"
              "main main main"
                `,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              gridArea: "sider",
              borderRight: "1px solid",
              borderColor: "grey.200",
              pr: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Rating
              value={data.rating}
              readOnly
              size="medium"
              precision={0.5}
            />
            {matchedSkills ? (
              <IconButton
                onClick={handleOpen}
                sx={{
                  height: "auto",
                  width: "min(100%, 200px)",
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.light,
                  },
                }}
              >
                <StyledBadge
                  sx={{
                    fontSize: "2rem",
                    boxSizing: "border-box",
                    height: "auto",
                    width: "min(100%, 200px)",
                  }}
                  color={getColor(percentage)}
                  badgeContent={
                    percentage ? (
                      <span
                        style={{
                          padding: "8px 14px",
                        }}
                      >
                        {Math.round(percentage)}%
                      </span>
                    ) : (
                      0
                    )
                  }
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Avatar
                    variant="circular"
                    src={data.img}
                    sx={{
                      width: "min(100%, 200px)",
                      height: "min(100%, 200px)",
                      fontSize: "2rem",
                      alignSelf: "center",
                      objectFit: "cover",
                    }}
                  />
                </StyledBadge>
              </IconButton>
            ) : (
              <Box sx={{ height: "auto", width: "min(100%, 200px)" }}>
                <Avatar
                  variant="circular"
                  src={data.img}
                  sx={{
                    width: "min(100%, 200px)",
                    height: "min(100%, 200px)",
                    fontSize: "2rem",
                    alignSelf: "center",
                    objectFit: "cover",
                  }}
                />
              </Box>
            )}
            {data.recommended && (
              <Chip
                sx={{ mt: 1 }}
                component="span"
                label={
                  <Box display="flex" alignItems="center">
                    <ThumbUpAltRounded sx={{ mr: 1 }} />
                    Recomendado
                  </Box>
                }
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
          <Box
            sx={{
              gridArea: "main",
              borderRight: "1px solid",
              borderColor: "grey.200",
              pr: 1,
            }}
          >
            <Stack>
              <Typography color="primary.dark" variant="h5">
                {data.name}
              </Typography>
              <Typography color="primary.dark" gutterBottom>
                {data.jobTitle}
                <strong>{` @${data.jobCompany} `}</strong>
                <Chip
                  component="span"
                  label={`+${data.exp} exp`}
                  color="primary"
                  variant="outlined"
                />
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  maxHeight: "100px",
                  overflowY: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {data.description}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Grid container spacing={1}>
                {data.skills.slice(0, 4).map((skill) => (
                  <Grid item key={skill}>
                    <Chip label={skill} />
                  </Grid>
                ))}
                {data.skills.length - 4 > 0 && (
                  <Grid item key="plus-skills">
                    <Chip
                      label={`+${data.skills.length - 4}`}
                      color="primary"
                    />
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Box>
          <Box
            sx={{
              gridArea: "services",
              display: { xs: "none", md: view === "list" ? "unset" : "none" },
            }}
          >
            <Stack>
              <Typography color="primary.dark" variant="subtitle1" gutterBottom>
                ¿Qué ofrece?
              </Typography>
              <Divider />
              {data.services.includes("fast-replies") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <OfflineBoltOutlined fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption" gutterBottom>
                    Responde rápido
                  </Typography>
                  <Divider />
                </>
              )}
              {data.services.includes("free-mail") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <ChatOutlined fontSize="1rem" color="primary" />
                    <MailOutline fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption" gutterBottom>
                    Chat, correo electrónico o texto ilimitados dentro de los
                    límites acordados con el mentor.
                  </Typography>
                  <Divider />
                </>
              )}
              {data.services.includes("monthly-calls") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <Call fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption">
                    Hasta 1 llamada por mes
                  </Typography>
                  <Divider />
                </>
              )}
              {data.services.includes("weekly-calls") && (
                <>
                  <Stack flexDirection="row" justifyItems="center" m="1rem 0 0">
                    <Call fontSize="1rem" color="primary" />
                  </Stack>
                  <Typography variant="caption">
                    Hasta 4 llamada por mes
                  </Typography>
                  <Divider />
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/mentor/${data.id}`}
          fullWidth
          variant="text"
        >
          Ver perfil
        </Button>
      </CardActions>
    </StyledCard>
  );
}
