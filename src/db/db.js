import veronica from "../assets/veronica-diaz.jpeg";
import thiago from "../assets/thiago-carpintero.png";
import ricardo from "../assets/ricardo-lopez.png";

export const db = {
  mentors: [
    {
      id: 2,
      name: "Verónica Díaz",
      jobTitle: "Desarrolladora Back-end",
      jobCompany: "Mercado Libre",
      skills: [
        "JavaScript",
        "Web Development",
        "NodeJS",
        "Architecture",
        "SQL",
        "MySQL",
        "MongoDB",
        "Web",
      ],
      services: ["free-mail", "weekly-calls"],
      rating: 5,
      img: veronica,
      description:
        "Soy una Desarrolladora backend con amplios conocimientos en construcción de aplicaciones de software de uso masivo. También brindó capacitaciones en la empresa que trabajó. Me apasiona la idea de poder transmitir mis conocimientos adquiridos a lo largo de estos años a otros colegas.",
      reviews: [
        {
          studentName: "Migules Migueles",
          comment: {
            date: "2022-09-20T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 1,
        },
        {
          studentName: "Mateo Matete",
          comment: {
            date: "2022-10-05T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 3,
        },
      ],
    },
    {
      id: 1,
      name: "Thiago Carpintero",
      jobTitle: "Team Lead",
      jobCompany: "Stripe",
      skills: [
        "JavaScript",
        "Web Development",
        "Web Design",
        "Leadership",
        "React",
        "NodeJS",
        "Startup",
        "Product Design",
        "Web",
      ],
      services: ["fast-replies", "free-mail", "monthly-calls"],
      rating: "4",
      img: thiago,
      description:
        "Soy un desarrallor front-end senior. Me recibí en Licenciatura en informatica y desde hace 8 años, he trabajado en distintas compañias nacionales como internacionales.",
      reviews: [
        {
          studentName: "Migules Migueles",
          comment: {
            date: "2022-09-20T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 1,
        },
        {
          studentName: "Mateo Matete",
          comment: {
            date: "2022-10-05T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 3,
        },
      ],
    },
    {
      id: 3,
      name: "Ricardo Lopez",
      jobTitle: "Scrum Master",
      jobCompany: "Google",
      skills: [
        "Agile",
        "Leadership",
        "Project Management",
        "Product Management",
        "Product Design",
        "Management",
        "Strategy",
        "Business",
      ],
      services: ["free-mail", "monthly-calls"],
      rating: "4",
      img: ricardo,
      description:
        "Soy un facilitador por naturaleza, la tecnología está cambiando el mundo y me entusiasma poder acompañar y ayudar al alumno brindándole oportunidades para que pueda encontrar y seguir su plan de carrera.",
      reviews: [
        {
          studentName: "Migules Migueles",
          comment: {
            date: "2022-09-20T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 1,
        },
        {
          studentName: "Mateo Matete",
          comment: {
            date: "2022-10-05T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 3,
        },
      ],
    },
  ],
};
