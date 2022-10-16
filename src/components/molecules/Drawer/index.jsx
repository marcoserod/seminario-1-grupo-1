import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { SearchOutlined } from "@mui/icons-material";
import { skills as skillList } from "./helpers";
import { debounce } from "../../../utils";
import { ControlledAccordion } from "../../atoms/ControlledAccordion";
import { FindMyMatchDialog } from "../FindMyMatchDialog";

const drawerWidth = 240;

export const FiltersDrawer = ({
  container,
  isOpen,
  handleDrawerToggle,
  children,
  handleFiltering,
}) => {
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search);
  const initSkills = parsedQuery.skills;
  const initServices = parsedQuery.services;
  const initRating = parsedQuery.rating;
  const initMinExp = parsedQuery.minExp;
  const initMaxExp = parsedQuery.maxExp;
  const initSort = parsedQuery.sort;

  const parseQueryToState = useCallback((initQuery) => {
    if (initQuery) {
      return typeof initQuery === "string" ? [initQuery] : initQuery;
    }
    return [];
  }, []);
  const [sorting, setSorting] = useState(() => initSort);
  const [skills, setSkills] = useState(parseQueryToState(initSkills));
  const [services, setServices] = useState(parseQueryToState(initServices));
  const [rating, setRating] = useState(initRating || "");
  const [skillSearch, setSkillSearch] = useState("");
  const [expRange, setExpRange] = useState({
    min: initMinExp || "",
    max: initMaxExp || "",
  });
  const { min, max } = expRange;
  const [matchModalOpen, setMatchModalOpen] = useState(false);
  const isFiltered = [...skills, ...services, rating, min, max].some(
    (value) => value
  );

  const isChecked = (name, state) => {
    return state.some((item) => item === name);
  };
  const handleCleanFilters = () => {
    setSkills([]);
    setServices([]);
    setRating("");
    setSkillSearch("");
    setExpRange({
      min: "",
      max: "",
    });
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

  const handleMinExpChange = (event) => {
    const {
      target: { value },
    } = event;
    setExpRange((prev) => ({ ...prev, min: value }));
  };
  const handleMaxExpChange = (event) => {
    const {
      target: { value },
    } = event;
    setExpRange((prev) => ({ ...prev, max: value }));
  };

  const handleSort = (e) => {
    setSorting(e.target.value);
  };

  const handleMatchModalOpen = () => {
    setMatchModalOpen((prev) => !prev);
  };

  const drawer = (
    <div>
      <FindMyMatchDialog
        open={matchModalOpen}
        handleClose={handleMatchModalOpen}
      />
      <Grid container>
        <Grid item xs={12} display="flex" alignItems="center">
          <Button
            onClick={handleMatchModalOpen}
            size="large"
            variant="contained"
            sx={{
              fontWeight: "bold",

              margin: "8px auto 0",
              display: {
                sm: "unset",
                xs: "none",
              },
            }}
          >
            <span>
              Encontrar mi <span style={{ fontStyle: "italic" }}> MATCH </span>
            </span>
          </Button>
        </Grid>
      </Grid>

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
      <ControlledAccordion
        defaultOpen={Boolean(skills.length)}
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
      </ControlledAccordion>
      <ControlledAccordion
        defaultOpen={Boolean(min || max)}
        sx={{ backgroundColor: "#EEEEEE50" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Experiencia</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="minExp"
                fullWidth
                id="minExp"
                label="Mínima"
                type="number"
                value={expRange.min}
                onChange={handleMinExpChange}
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                id="maxExp"
                label="Máxima"
                name="maxExp"
                value={expRange.max}
                onChange={handleMaxExpChange}
                InputProps={{ inputProps: { min: expRange.min || 0 } }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </ControlledAccordion>
      <ControlledAccordion
        defaultOpen={Boolean(services.length)}
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
      </ControlledAccordion>
      <ControlledAccordion
        defaultOpen={Boolean(rating)}
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
      </ControlledAccordion>
    </div>
  );

  const handleInnerFiltering = () => {
    const order = ["skills", "services", "rating", "sort"];
    const activeFilters = {
      skills,
      services,
      rating: rating || undefined,
      minExp: expRange.min || undefined,
      maxExp: expRange.max || undefined,
      sort: sorting,
    };
    const query = queryString.stringify(activeFilters, {
      sort: (a, b) => order.indexOf(a) - order.indexOf(b),
    });
    if (location.search !== `?${query}`) {
      handleFiltering(query);
    }
  };

  useEffect(() => {
    handleInnerFiltering();
  }, [skills, services, rating, min, max, sorting]);

  useEffect(() => {
    setSkills(parseQueryToState(initSkills));
    setSorting(initSort);
    setServices(parseQueryToState(initServices));
    setRating(initRating || "");
    setExpRange({
      min: initMinExp || "",
      max: initMaxExp || "",
    });
  }, [location.search]);

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
              zIndex: 1000,
              paddingBottom: "80px",
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

      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        alignItems="center"
        sx={{
          display: "flex",
          bgcolor: (theme) => theme.palette.background.default,
          width: "100%",
          position: "fixed",
          top: "initial",
          left: "initial",
          zIndex: 1000,
          marginLeft: { xs: "unset", sm: `${drawerWidth}px` },
        }}
      >
        <Grid item xs={12}>
          <Button
            onClick={handleMatchModalOpen}
            variant="contained"
            sx={{ marginTop: "8px", display: { xs: "unset", sm: "none" } }}
          >
            <span>
              Encontrar mi <span style={{ fontStyle: "italic" }}> MATCH</span>
            </span>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", sm: "none" },
              height: "56px",
              marginTop: "4px",
            }}
            startIcon={<FilterListIcon fontSize="small" />}
          >
            Filtrar
          </Button>
        </Grid>
        <Grid item>
          <FormControl margin="dense">
            <InputLabel id="sort-by">Ordenar por</InputLabel>
            <Select
              onChange={handleSort}
              label="Ordenar por"
              labelId="sort-by"
              value={sorting}
            >
              <MenuItem value="rating">Mejor calificados</MenuItem>
              <MenuItem value="id">Más recientes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box
        component="main"
        sx={{
          flexShrink: { sm: 0 },
          flexGrow: 1,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: "calc(100vw - 80px)",
          },
          margin: { xs: "144px 1.5rem 40px", sm: "100px 1.5rem 40px" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
