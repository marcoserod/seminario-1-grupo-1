import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/SShipLogo.svg";

import { Button } from "../../atoms/Button";
import { HomeCarousel } from "../../molecules/HomeCarousel";

const StyledSvg = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  svg {
    max-width: min(200px, 50%);
    height: auto;
    path {
      fill: #fff7f0;
    }
  }
`;

const StyledBox = styled(Box)`
  background-color: #fff7f0;
  position: relative;
  &:before {
    position: absolute;
    pointer-events: none;
    content: "";
    width: 100%;
    height: 100px;
    display: block;
    top: -100px;
    background-image: linear-gradient(
      to bottom right,
      transparent 50%,
      #fff7f0 0
    );
  }
`;

export const Home = () => {
  const navigateTo = useNavigate();

  const handleRedirect = () => {
    navigateTo("/mentor/search?sort=recommended&view=list&qtyView=1");
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: (theme) => theme.palette.primary.mainGradient,
        }}
      >
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", alignSelf: "center" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "2rem",
                  color: (theme) => theme.palette.primary.contrastText,
                }}
              >
                <figure className="text-center mb-0">
                  <blockquote
                    cite="https://www.goodreads.com/author/show/136961.Phil_Collins"
                    style={{ textIndent: "-0.45em", margin: "0.5rem" }}
                  >
                    <q>
                      En el aprendizaje enseñarás, y en la enseñanza aprenderás
                    </q>
                  </blockquote>
                  <figcaption
                    style={{
                      fontSize: "1rem",
                      textAlign: "right",
                    }}
                  >
                    &mdash; Phil Collins, <cite>Son of man</cite>
                  </figcaption>
                </figure>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: {
                  xs: "none",
                  sm: "inherit",
                },
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <StyledSvg>
                <Logo />
              </StyledSvg>
            </Grid>
          </Grid>

          <Box
            sx={{
              height: "150px",
              backgroundImage: (theme) => theme.palette.primary.mainGradient,
              marginTop: "2rem",
            }}
          >
            <Button onClick={handleRedirect}>BUSCAR MENTOr</Button>
          </Box>
        </Container>
      </Box>
      <StyledBox>
        <Container>
          <HomeCarousel />
        </Container>
      </StyledBox>
    </>
  );
};
