import {
  ChevronLeft,
  ExpandMore,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  FormControl,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../db/db";
import { sort } from "../../../utils";
import { Storage } from "../../../utils/Storage";
import MatchesList from "../../molecules/MatchesList";
import Podium from "../../molecules/Podium";
import { LoadingMatch } from "./LoadingMatch";
import { FiltersDrawer } from "../../molecules/Drawer";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const MatchFinder = () => {
  const navigateTo = useNavigate();
  const [cachedMatches, setChachedMatches, removeCachedMatches] = Storage(
    "matches",
    true
  );
  // To remove old cached structure
  if (cachedMatches && cachedMatches[0].mentor) {
    removeCachedMatches();
  }
  const [matches, setMatches] = useState(cachedMatches || null);
  const [interests, setInterests] = useState([
    "JavaScript",
    "Web Development",
    "NodeJS",
    "Architecture",
    "SQL",
    "MySQL",
    "MongoDB",
    "Web",
    "Agile",
  ]);
  const [isMatching, setIsMatching] = useState(false);
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showFiltersForMatch, setFiltersForMatch] = useState(false);

  const handleFiltering = useCallback((querySearch) => {
    const newLocation = {
      pathname: "/mentor/match",
      search: querySearch,
    };
    navigateTo(newLocation);
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleGoBack = () => {
    navigateTo("/mentor/search?sort=recommended&view=list&qtyView=1");
  };

  const countMatchesByMentor = (mentor) => {
    let matches = 0;
    const matchedSkills = [];
    const unmatchedSkills = [];
    interests.forEach((interest) => {
      if (mentor.skills.find((skill) => skill === interest)) {
        matches += 1;
        matchedSkills.push(interest);
      } else {
        unmatchedSkills.push(interest);
      }
    });
    return {
      ...mentor,
      matchedSkills,
      unmatchedSkills,
      matches,
      percentage: (matches * 100) / interests.length,
    };
  };

  const findMatch = () => {
    setIsMatching(true);
    const startTime = performance.now();
    let result = [];
    db.mentors.forEach((mentor) => {
      result.push(countMatchesByMentor(mentor));
    });
    result = result.filter((match) => match.percentage);
    result = sort(result, "percentage");
    const endTime = performance.now();

    if (endTime - startTime < 1000) {
      setTimeout(() => setIsMatching(false), 2000);
    }
    setMatches(result);
    setTimeout(() => setChachedMatches(result), 10000);
    return result;
  };

  const handleRetry = () => {
    removeCachedMatches();
    setMatches(null);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: (theme) => theme.palette.primary.mainGradient,
          zIndex: (theme) => theme.zIndex.drawer - 1,
          position: "fixed",
          width: "100%",
          pt: 1,
          pb: 1,
        }}
      >
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            alignItems: "center",
            color: (theme) => theme.palette.primary.contrastText,
          }}
        >
          <IconButton color="inherit" onClick={handleGoBack}>
            <ChevronLeft />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6">ENCONTRAR MI MATCH</Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Container>
      </Box>
      <Toolbar sx={{ pointerEvents: "none" }} />
      <Container
        sx={{ display: "flex", flexDirection: "column" }}
        maxWidth="false"
      >
        {!matches ? (
          <>
            <Accordion defaultExpanded elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  color="primary"
                  variant="h6"
                  sx={{ fontWeight: 600 }}
                >
                  Tus intereses
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1} justifyContent="center">
                  <FormControl sx={{ m: 1, width: "100%" }}>
                    <Autocomplete
                      onChange={(_, newValue) => setInterests(newValue)}
                      fullWidth
                      multiple
                      options={db.skills}
                      getOptionLabel={(option) => option}
                      value={interests}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Agregar o quitar intereses"
                          placeholder="Buscar"
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Box sx={{ flexGrow: 1 }} />
            <Button onClick={() => findMatch()}>Buscar mi Match</Button>
            <Box sx={{ flexGrow: 1 }} />
          </>
        ) : null}
        <LoadingMatch isLoading={isMatching} />
        {matches && (
          <Container
            ref={container}
            style={{ position: "relative" }}
            maxWidth="false"
          >
            <FiltersDrawer
              {...{
                container,
                isOpen,
                handleDrawerToggle,
                handleFiltering,
                showFiltersForMatch,
                interests,
              }}
            >
              <Grid container alignItems="center">
                <Grid item>
                  <Typography>
                    Tu resultado del día:{" "}
                    {new Date().toLocaleDateString("es", options)}
                  </Typography>
                </Grid>
                <Grid item sx={{ marginLeft: "auto" }}>
                  {!showFiltersForMatch ? (
                    <Button
                      onClick={() => setFiltersForMatch(true)}
                      startIcon={<Visibility fontSize="small" />}
                    >
                      Ver Filtros
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setFiltersForMatch(false)}
                      startIcon={<VisibilityOff fontSize="small" />}
                    >
                      Ocultar Filtros
                    </Button>
                  )}
                  <Button onClick={handleRetry}>Volver a buscar</Button>
                </Grid>
              </Grid>
              {!showFiltersForMatch && (
                <Podium
                  off={cachedMatches}
                  winners={matches.map((winner, position) => ({
                    ...winner,
                    position,
                  }))}
                />
              )}
              <Box
                sx={{
                  width: {
                    sm: `100%`,
                  },
                }}
              >
                <MatchesList
                  off={cachedMatches}
                  winners={matches.map((winner, position) => ({
                    ...winner,
                    position,
                  }))}
                />
              </Box>
            </FiltersDrawer>
          </Container>
        )}
      </Container>
    </>
  );
};
