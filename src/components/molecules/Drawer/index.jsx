import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { SearchOutlined } from "@mui/icons-material";
import { skills as skillList } from "./helpers";
import { debounce } from "../../../utils";

const drawerWidth = 240;

export const FiltersDrawer = ({
  container,
  isOpen,
  handleDrawerToggle,
  children,
  handleFiltering,
  parsedQuery,
}) => {
  const location = useLocation();
  const initSkills = parsedQuery.skills;
  const initServices = parsedQuery.services;
  const initRating = parsedQuery.rating;
  const parseQueryToState = useCallback((initQuery) => {
    if (initQuery) {
      return typeof initQuery === "string" ? [initQuery] : initQuery;
    }
    return [];
  }, []);

  const [skills, setSkills] = useState(parseQueryToState(initSkills));
  const [services, setServices] = useState(parseQueryToState(initServices));
  const [rating, setRating] = useState(initRating || "");
  const isFiltered = [...skills, ...services, rating].some((value) => value);
  const [skillSearch, setSkillSearch] = useState("");

  const isChecked = (name, state) => {
    return state.some((item) => item === name);
  };
  const handleCleanFilters = () => {
    setSkills([]);
    setServices([]);
    setRating("");
    setSkillSearch("");
  };

  const handleSkillsChange = (event) => {
    const {
      target: { checked, name },
    } = event;
    if (checked) {
      setSkills([...skills, name]);
      return;
    }
    setSkills(skills.filter((item) => item !== event.target.name));
  };

  const handleServicesChange = (event) => {
    const {
      target: { checked, name },
    } = event;
    if (checked) {
      setServices([...services, name]);
      return;
    }
    setServices(services.filter((item) => item !== event.target.name));
  };

  const handleRatingChange = (event) => {
    const {
      target: { value },
    } = event;
    setRating(value);
  };

  const handleSkillSearch = (event) => {
    const {
      target: { value },
    } = event;
    setSkillSearch(value);
  };

  const filteredSkills = skillList.filter((skill) =>
    skill.toLowerCase().includes(skillSearch.toLowerCase())
  );

  const drawer = (
    <div>
      <Toolbar>
        <FilterListIcon />
        <Typography ml={2}>Filtros</Typography>
        {isFiltered && (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <Button onClick={handleCleanFilters}>Borrar</Button>
          </>
        )}
      </Toolbar>
      <Divider />
      <Accordion
        defaultExpanded={Boolean(skills.length)}
        sx={{ backgroundColor: "#EEEEEE50" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Habilidades</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            size="small"
            id="skillSearch"
            label="Filtrá habilidades"
            name="skillSearch"
            onChange={debounce((e) => {
              handleSkillSearch(e);
            })}
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
          <FormGroup
            onChange={handleSkillsChange}
            sx={{
              flexWrap: "nowrap",
              maxHeight: "300px",
              overflowX: "auto",
              direction: "column",
            }}
          >
            {filteredSkills.map((skill) => (
              <FormControlLabel
                key={skill}
                control={<Checkbox />}
                label={skill}
                checked={isChecked(skill, skills)}
                name={skill}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded={Boolean(services.length)}
        sx={{ backgroundColor: "#EEEEEE50" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Servicios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup onChange={handleServicesChange}>
            <FormControlLabel
              control={<Checkbox />}
              label="Respuesta rápida"
              checked={isChecked("fast-replies", services)}
              name="fast-replies"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Mensajes libres"
              checked={isChecked("free-mail", services)}
              name="free-mail"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Llamadas semanales"
              checked={isChecked("weekly-calls", services)}
              name="weekly-calls"
              disabled={services.includes("monthly-calls")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Llamadas mensuales"
              checked={isChecked("monthly-calls", services)}
              name="monthly-calls"
              disabled={services.includes("weekly-calls")}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded={Boolean(rating)}
        sx={{ backgroundColor: "#EEEEEE50" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Calificación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup onChange={handleRatingChange} value={rating}>
            <FormControlLabel
              control={<Radio />}
              label={
                <>
                  <span>4,5 o más</span>
                  <Rating
                    precision={0.5}
                    readOnly
                    size="small"
                    defaultValue={4.5}
                  />
                </>
              }
              value="4.5"
            />
            <FormControlLabel
              control={<Radio />}
              label={
                <>
                  <span>4,0 o más</span>
                  <Rating
                    precision={0.5}
                    readOnly
                    size="small"
                    defaultValue={4}
                  />
                </>
              }
              value="4"
            />
            <FormControlLabel
              control={<Radio />}
              label={
                <>
                  <span>3,5 o más</span>
                  <Rating
                    precision={0.5}
                    readOnly
                    size="small"
                    defaultValue={3.5}
                  />
                </>
              }
              value="3.5"
            />
            <FormControlLabel
              control={<Radio />}
              label={
                <>
                  <span>3,0 o más</span>
                  <Rating
                    precision={0.5}
                    readOnly
                    size="small"
                    defaultValue={3}
                  />
                </>
              }
              value="3"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );

  const handleInnerFiltering = () => {
    const order = ["q", "skills", "services", "rating"];
    const activeFilters = {
      skills,
      services,
      rating: rating || undefined,
    };
    const query = queryString.stringify(activeFilters, {
      sort: (a, b) => order.indexOf(a) - order.indexOf(b),
    });
    if (location.search !== query) {
      handleFiltering(query);
    }
  };

  useEffect(() => {
    handleInnerFiltering();
  }, [skills, services, rating]);

  return (
    <Box
      sx={{ display: "flex", width: "calc(100% - 1rem)" }}
      id="container-test"
    >
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            container: container.current,
          }}
          PaperProps={{ style: { position: "absolute" } }}
          BackdropProps={{ style: { position: "absolute" } }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          ModalProps={{ container: container.current }}
          PaperProps={{
            style: {
              position: "fixed",
              top: "initial",
              left: "initial",
              height: "calc(100vh - 124px)",
              zIndex: 1000,
            },
          }}
          BackdropProps={{ style: { position: "absolute" } }}
          container={container.current}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexShrink: { sm: 0 },
          flexGrow: 1,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: "calc(100vw - 80px)",
          },
          margin: "0 1.5rem",
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
          size="large"
        >
          <FilterListIcon />
        </IconButton>
        {children}
      </Box>
    </Box>
  );
};