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
  ListItemIcon,
  ListItemText,
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
import { SearchOutlined, ViewColumn, ViewList } from "@mui/icons-material";
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
  showFiltersForMatch,
  interests,
}) => {
  const location = useLocation();
  const isMatch = location.pathname === "/mentor/match";
  const displayFilters = !showFiltersForMatch ? "none" : "unset";
  const parsedQuery = queryString.parse(location.search);
  const initSkills = parsedQuery.skills;
  const initServices = parsedQuery.services;
  const initRating = parsedQuery.rating;
  const initMinExp = parsedQuery.minExp;
  const initMaxExp = parsedQuery.maxExp;
  const initSort = parsedQuery.sort;
  const initView = parsedQuery.view;
  const initQtyView = parsedQuery.qtyView || 1;
  const displaySkillList = isMatch ? interests : skillList;

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
  const [view, setView] = useState(initView);
  const [qtyView, setQtyView] = useState(initQtyView);
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

  const filteredSkills = displaySkillList.filter((skill) =>
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

  const handleView = (e) => {
    setView(e.target.value);
  };
  const handleQtyView = (e) => {
    setQtyView(e.target.value);
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
                sm: !isMatch ? "unset" : "none",
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
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>Experiencia</Typography>
            <Typography variant="caption" ml={1}>
              (en años)
            </Typography>
          </Box>
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
    const order = ["skills", "services", "rating", "sort", "view", "qtyView"];
    const activeFilters = {
      skills,
      services,
      rating: rating || undefined,
      minExp: expRange.min || undefined,
      maxExp: expRange.max || undefined,
      sort: sorting,
      view,
      qtyView,
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
  }, [skills, services, rating, min, max, sorting, view, qtyView]);

  useEffect(() => {
    setSkills(parseQueryToState(initSkills));
    setSorting(initSort);
    setServices(parseQueryToState(initServices));
    setRating(initRating || "");
    setExpRange({
      min: initMinExp || "",
      max: initMaxExp || "",
    });
    setView(initView);
    setQtyView(qtyView);
  }, [location.search]);

  return (
    <Box
      sx={{ display: "flex", width: "calc(100% - 1rem)" }}
      id="container-test"
    >
      <Box
        component="nav"
        sx={{
          width: {
            // eslint-disable-next-line no-nested-ternary
            sm: !isMatch ? drawerWidth : showFiltersForMatch ? drawerWidth : 0,
          },
          flexShrink: { sm: 0 },
        }}
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
              paddingBottom: isMatch ? "160px" : "80px",
              height: "100%",
            },
          }}
          BackdropProps={{ style: { position: "absolute" } }}
          container={container.current}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: !isMatch ? "block" : displayFilters },
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
          // eslint-disable-next-line no-nested-ternary
          display: !isMatch ? "flex" : showFiltersForMatch ? "flex" : "none",
          bgcolor: (theme) => theme.palette.background.default,
          width: "100%",
          position: "fixed",
          top: "initial",
          left: "initial",
          zIndex: 1000,
          marginLeft: {
            xs: "unset",
            sm: isMatch && !showFiltersForMatch ? "none" : `${drawerWidth}px`,
          },
        }}
      >
        <Grid item xs={12}>
          <Button
            onClick={handleMatchModalOpen}
            variant="contained"
            sx={{
              marginTop: "8px",
              display: { xs: isMatch ? "none" : "unset", sm: "none" },
            }}
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
              defaultValue={isMatch ? "percentage" : "rating"}
            >
              {isMatch && (
                <MenuItem value="percentage">
                  <ListItemText>Mayor porcentaje</ListItemText>
                </MenuItem>
              )}
              <MenuItem value="recommended">
                <ListItemText>Recomendados</ListItemText>
              </MenuItem>
              <MenuItem value="rating">
                <ListItemText>Mejor calificados</ListItemText>
              </MenuItem>
              <MenuItem value="id">
                <ListItemText>Más recientes</ListItemText>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "unset" },
          }}
        >
          <FormControl margin="dense">
            <InputLabel id="see-as">Ver como</InputLabel>
            <Select
              onChange={handleView}
              label="Ver como"
              labelId="see-as"
              value={view}
              defaultValue="list"
            >
              <MenuItem value="list">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon sx={{ minWidth: "2rem" }}>
                    <ViewList />
                  </ListItemIcon>
                  <ListItemText>Lista </ListItemText>
                </Box>
              </MenuItem>
              <MenuItem value="column">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon sx={{ minWidth: "2rem" }}>
                    <ViewColumn />
                  </ListItemIcon>
                  <ListItemText>Columna </ListItemText>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", lg: view === "list" ? "unset" : "none" },
          }}
        >
          <FormControl margin="dense">
            <Select onChange={handleQtyView} labelId="qty" value={qtyView}>
              <MenuItem value={1}>
                <ListItemText>x1</ListItemText>
              </MenuItem>
              <MenuItem value={2}>
                <ListItemText>x2</ListItemText>
              </MenuItem>
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
            // eslint-disable-next-line no-nested-ternary
            sm: !isMatch
              ? `calc(100% - ${drawerWidth}px)`
              : showFiltersForMatch
              ? `calc(100% - ${drawerWidth}px)`
              : "calc(100vw - 80px)",
            xs: "calc(100vw - 80px)",
          },
          margin: {
            // eslint-disable-next-line no-nested-ternary
            xs: !isMatch
              ? "144px 1.5rem 40px"
              : showFiltersForMatch
              ? "100px 1.5rem 40px"
              : 0,
            // eslint-disable-next-line no-nested-ternary
            sm: !isMatch
              ? "100px 1.5rem 40px"
              : showFiltersForMatch
              ? "100px 1.5rem 40px"
              : 0,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
