import {
  ConnectWithoutContact,
  PersonSearch,
  RocketLaunch,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { GradientIcon } from "../../atoms/GradientSVG";

export const HomeCarousel = () => {
  const carouselItems = [
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <GradientIcon
          Icon={PersonSearch}
          height="min(100%, 200px)"
          width="min(100%, 200px)"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          margin: "auto 0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            backgroundImage:
              "linear-gradient(90deg, #B17FE2 16.67%, #B44CF4 84.37%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Explorá
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            margin: { xs: "0", sm: "1rem 4rem" },
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "#595757",
          }}
        >
          Buscá a alguien en quien puedas inspirarte.
        </Typography>
      </Grid>
    </Grid>,
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <GradientIcon
          Icon={ConnectWithoutContact}
          height="min(100%, 200px)"
          width="min(100%, 200px)"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          margin: "auto 0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            backgroundImage:
              "linear-gradient(90deg, #B17FE2 16.67%, #B44CF4 84.37%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Contactá
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            margin: { xs: "0", sm: "1rem 4rem" },
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "#595757",
          }}
        >
          Elegí y conectá con la persona ideal para guiarte.
        </Typography>
      </Grid>
    </Grid>,
    <Grid
      container
      sx={{
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GradientIcon
          Icon={RocketLaunch}
          height="min(100%, 200px)"
          width="min(100%, 200px)"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          margin: "auto 0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            backgroundImage:
              "linear-gradient(90deg, #B17FE2 16.67%, #B44CF4 84.37%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Crecé
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            margin: { xs: "0", sm: "1rem 4rem" },
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "#595757",
          }}
        >
          Con la ayuda de un mentor, podras crecer exponencialmente.
        </Typography>
      </Grid>
    </Grid>,
  ];

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Container
          disableGutters
          maxWidth="false"
          sx={{
            display: "flex",
            minHeight: "calc(100vh - 500px)",
            justifyContent: "space-around",
            alignContent: "center",
          }}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {item}
        </Container>
      ))}
    </Carousel>
  );
};
