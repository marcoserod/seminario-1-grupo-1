import veronica from "../assets/veronica-diaz.jpeg";
import thiago from "../assets/thiago-carpintero.png";
import ricardo from "../assets/ricardo-lopez.png";
import maria from "../assets/maria.png";
import paula from "../assets/paula.png";
import franco from "../assets/franco.png";
import sergio from "../assets/Sergio.jpg";
import juan from "../assets/juan.jpg";
import ibm from "../assets/IBM.png";
import stripe from "../assets/Stripe.png";
import accenture from "../assets/accenture.jpg";
import globant from "../assets/globant.png";
import mercadolibre from "../assets/mercadolibre.jpg";
import jpmorgan from "../assets/jpmorgan.png";
import pedidosya from "../assets/pedidosya.png";
import google from "../assets/google.png";

export const db = {
  mentees: [
    { id: 1, studentName: "Paula Gómez", img: paula, joined: "02-02-2020" },
    { id: 2, studentName: "Franco García", img: franco, joined: "02-12-2019" },
    { id: 3, studentName: "María Gonzalez", img: maria, joined: "02-03-2018" },
    { id: 4, studentName: "Sergio Flores", img: sergio, joined: "31-10-2020" },
    { id: 5, studentName: "Juan Rivera", img: juan, joined: "05-11-2016" },
  ],
  mentors: [
    {
      id: 2,
      name: "Verónica Díaz",
      recommended: true,
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
      mentees: [1, 2, 3, 4, 5],
      services: ["free-mail", "weekly-calls"],
      rating: 5,
      exp: 7,
      img: veronica,
      description:
        "Soy una Desarrolladora backend con amplios conocimientos en construcción de aplicaciones de software de uso masivo. También brindó capacitaciones en la empresa que trabajó. Me apasiona la idea de poder transmitir mis conocimientos adquiridos a lo largo de estos años a otros colegas.",
      reviews: [
        {
          studentName: "Paula Gómez",
          img: paula,
          comment: {
            date: "2022-10-05T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 1,
        },
        {
          studentName: "Franco García",
          img: franco,
          comment: {
            date: "2022-09-30T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 3,
        },
        {
          studentName: "María Gonzalez",
          img: maria,
          comment: {
            date: "2022-09-20T03:18:27.532Z",
            message:
              "Muy buena mentora, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 5,
          id: 2,
        },
      ],
      experience: [
        {
          id: 1,
          jobTitle: "Pasante de desarrollo de software",
          img: accenture,
          jobDescription:
            "Di mis primeros pasos en el mundo de la programacion como pasante, usando tecnologias de backend",
          startDate: "2015-01-01",
          endDate: "2016-12-01",
        },
        {
          id: 2,
          jobTitle: "Desarrolladora Backend",
          img: globant,
          jobDescription: "Desarrolladora backend en globant",
          startDate: "2017-01-01",
          endDate: "2020-01-01",
        },
        {
          id: 3,
          jobTitle: "Desarrolladora Backend",
          img: mercadolibre,
          jobDescription: "Desarrolladora backend en Mercadolibre",
          startDate: "2020-01-01",
          endDate: new Date().toISOString().slice(0, 10),
        },
      ],
    },
    {
      id: 1,
      name: "Thiago Carpintero",
      recommended: true,
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
      mentees: [1, 2, 3, 4, 5],
      services: ["fast-replies", "free-mail", "monthly-calls"],
      rating: 4,
      img: thiago,
      exp: 8,
      description:
        "Soy un desarrallor front-end senior. Me recibí en Licenciatura en informatica y desde hace 8 años, he trabajado en distintas compañias nacionales como internacionales.",
      reviews: [
        {
          studentName: "Paula Gómez",
          img: paula,
          comment: {
            date: "2022-10-05T03:18:27.532Z",
            message:
              "Muy buen mentor, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 4,
          id: 1,
        },
        {
          studentName: "Franco García",
          img: franco,
          comment: {
            date: "2022-09-30T03:18:27.532Z",
            message:
              "Muy buen mentor, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 4,
          id: 3,
        },
        {
          studentName: "María Gonzalez",
          img: maria,
          comment: {
            date: "2022-09-20T03:18:27.532Z",
            message:
              "Muy buen mentor, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 4,
          id: 2,
        },
      ],
      experience: [
        {
          id: 1,
          jobTitle: "React developer",
          img: ibm,
          jobDescription:
            "Di mis primeros pasos y trabaje varios años en IBM como front end developer",
          startDate: "2014-09-20",
          endDate: "2017-03-02",
        },

        {
          id: 2,
          jobTitle: "Team Lead",
          img: stripe,
          jobDescription:
            "Actualmente soy Team Lead de el equipo de web development en stripe",
          startDate: "2017-04-01",
          endDate: new Date().toISOString().slice(0, 10),
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
      mentees: [1, 2, 3, 4, 5],
      services: ["free-mail", "monthly-calls"],
      rating: 3.5,
      exp: 6,
      img: ricardo,
      description:
        "Soy un facilitador por naturaleza, la tecnología está cambiando el mundo y me entusiasma poder acompañar y ayudar al alumno brindándole oportunidades para que pueda encontrar y seguir su plan de carrera.",
      reviews: [
        {
          studentName: "Paula Gómez",
          img: paula,
          comment: {
            date: "2022-10-05T03:18:27.532Z",
            message:
              "Muy buen mentor, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 3.5,
          id: 1,
        },
        {
          studentName: "Franco García",
          img: franco,
          comment: {
            date: "2022-09-30T03:18:27.532Z",
            message:
              "Muy buen mentor, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 4,
          id: 3,
        },
        {
          studentName: "Maria Gonzalez",
          img: maria,
          comment: {
            date: "2022-09-20T03:18:27.532Z",
            message:
              "Muy buen mentor, aprendi muchisimo, y me guio en mis actividades laborales",
          },
          rating: 3,
          id: 2,
        },
      ],
      experience: [
        {
          id: 1,
          jobTitle: "Project Manager Intern",
          img: jpmorgan,
          jobDescription:
            "Di mis primeros pasos en el mundo del management como pasante en Jp Morgan",
          startDate: "2016-01-01",
          endDate: "2017-01-01",
        },
        {
          id: 2,
          jobTitle: "Scrum Master",
          img: pedidosya,
          jobDescription:
            "Entendiendo el mundo del management me desempeñe como scrum master en pedidos ya",
          startDate: "2018-01-01",
          endDate: "2019-12-12",
        },
        {
          id: 3,
          jobTitle: "Scrum Master",
          img: google,
          jobDescription: "Scrum master en un proyecto de desarrollo web",
          startDate: "2020-01-01",
          endDate: new Date().toISOString().slice(0, 10),
        },
      ],
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "Leadership",
    "Product Management",
    "Machine Learning",
    "React",
    "Startup",
    "Data Science",
    "Career",
    "Marketing",
    "Product Design",
    "Agile",
    "SQL",
    "Growth",
    "Entrepreneurship",
    "UX Design",
    "HTML",
    "Design Thinking",
    "Strategy",
    "AWS",
    "CSS",
    "Backend",
    "Design",
    "Management",
    "Java",
    "Web Development",
    "Frontend",
    "User Research",
    "Software Engineering",
    "Project Management",
    "Coding",
    "Typescript",
    "Product",
    "Startups",
    "Deep Learning",
    "Interview",
    "UI Design",
    "Product Strategy",
    "User Experience",
    "Node",
    "DevOps",
    "Resume",
    "Digital Marketing",
    "Data",
    "Programming",
    "Business",
    "NodeJS",
    "Architecture",
    "Product Development",
    "Prototyping",
    "System Design",
    "SaaS",
    "Cloud",
    "Algorithms",
    "SEO",
    "Artificial Intelligence",
    "Analytics",
    "Web",
    "Interaction Design",
    "Data Structures",
    "Statistics",
    "Scrum",
    "UX Research",
    "Data Analysis",
    "Docker",
    "Sales",
    "Data Analytics",
    "Stakeholder Management",
    "User Interface Design",
    "TensorFlow",
    "Career Growth",
    "Kubernetes",
    "Web Design",
    "Engineering",
    "B2B",
    "Computer Vision",
    "Software Architecture",
    "User Interface",
    "Research",
    "Founder",
    "Fundraising",
    "Communication",
    "Branding",
    "Natural Language Processing",
    "Ruby",
    "Linux",
    "Git",
    "Product Marketing",
    "Redux",
    "Content Marketing",
    "Innovation",
    "Microservices",
    "Portfolio",
    "PyTorch",
    "Cybersecurity",
    "Android",
    "Consulting",
    "Visual Design",
    "Career Development",
    "PHP",
    "ReactJS",
    "AI",
    "Angular",
    "Business Development",
    "Golang",
    "Data Engineering",
    "GraphQL",
    "eCommerce",
    "C++",
    "Kotlin",
    "Public Speaking",
    "Graphic Design",
    "Operations",
    "Azure",
    "Keras",
    "Social Media",
    "Engineering Management",
    "Django",
    "Full Stack",
    "MySQL",
    "Technology",
    "Swift",
    "Blockchain",
    "MongoDB",
  ],
};
