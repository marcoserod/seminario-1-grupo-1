import { Chip, Divider, Grid, Typography } from "@mui/material";
import { useRef, useState, useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Container } from "@mui/system";
import queryString from "query-string";
import { FiltersDrawer } from "../../molecules/Drawer";
import MentorCard from "../../molecules/MentorCard";
import { db } from "../../../db/db";
import { sort } from "../../../utils";
// import { Loading } from "../../molecules/Loading";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const initialQuery = searchParams.get("q");
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search);
  const resetQueries = location.state?.resetQueries;

  const navigateTo = useNavigate();
  const handleFiltering = useCallback((querySearch) => {
    const newLocation = {
      pathname: "/mentor/search",
      search: querySearch,
    };
    navigateTo(newLocation);
  }, []);

  const handleDrawerToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const filterData = (data) => {
    let filteredData = data;

    if (parsedQuery.skills) {
      // eslint-disable-next-line no-unused-expressions
      [undefined, "string"].includes(typeof parsedQuery.skills)
        ? (filteredData = data.filter((mentor) =>
            mentor.skills.includes(parsedQuery.skills)
          ))
        : (filteredData = data.filter((mentor) =>
            parsedQuery.skills.every((skill) => mentor.skills.includes(skill))
          ));
    }

    if (parsedQuery.minExp) {
      filteredData = filteredData.filter(
        (mentor) => mentor.exp >= parsedQuery.minExp
      );
    }
    if (parsedQuery.maxExp) {
      filteredData = filteredData.filter(
        (mentor) => mentor.exp <= parsedQuery.maxExp
      );
    }

    if (parsedQuery.services) {
      // eslint-disable-next-line no-unused-expressions
      [undefined, "string"].includes(typeof parsedQuery.services)
        ? (filteredData = filteredData.filter((mentor) =>
            mentor.services.includes(parsedQuery.services)
          ))
        : (filteredData = filteredData.filter((mentor) =>
            parsedQuery.services.every((service) =>
              mentor.services.includes(service)
            )
          ));
    }

    if (parsedQuery.rating) {
      filteredData = filteredData.filter(
        (mentor) => mentor.rating >= parsedQuery.rating
      );
    }
    return sort(filteredData, parsedQuery.sort);
  };

  const data = filterData(db.mentors);

  return (
    <Container ref={container} style={{ position: "relative" }}>
      <FiltersDrawer
        {...{
          container,
          isOpen,
          handleDrawerToggle,
          handleFiltering,
          initialQuery,
          resetQueries,
        }}
      >
        {parsedQuery.skills && (
          <>
            <Typography variant="subtitle1">Resultados para:</Typography>
            <Divider />
            <Typography
              sx={{ marginBottom: "1rem", display: "block" }}
              variant="caption"
            >
              Hábilidades
            </Typography>
            <Grid container spacing={1}>
              {![undefined, "string"].includes(typeof parsedQuery.skills) ? (
                parsedQuery?.skills.map((skill) => (
                  <Grid item key={skill}>
                    <Chip label={skill} />
                  </Grid>
                ))
              ) : (
                <Chip label={parsedQuery.skills} />
              )}
            </Grid>
          </>
        )}
        <Grid
          pt={2}
          container
          rowSpacing={{ xs: 2, sm: 2, md: 3 }}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          {data.length ? (
            data.map((mentor) => (
              <Grid key={mentor.id} item mb={1} xs={12}>
                <MentorCard data={mentor} />
              </Grid>
            ))
          ) : (
            <Grid
              item
              mb={1}
              xs={12}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "3rem 0",
              }}
            >
              <Typography variant="h3">Sin mentores😧</Typography>
              <Typography>
                Lo sentimos, parece que todavía no tenemos mentores que se
                ajusten a sus criterios de búsqueda.
              </Typography>
            </Grid>
          )}
        </Grid>
      </FiltersDrawer>
      {/* <Loading loading={isdataGetMentorsLoading} /> */}
    </Container>
  );
};
