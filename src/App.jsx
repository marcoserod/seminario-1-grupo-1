import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { Home } from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import { SearchResults } from "./components/pages/SearchResults";
import { MentorDetail } from "./components/pages/MentorDetail";
import { MatchFinder } from "./components/pages/MatchFinder";
import { SendFeedback } from "./components/pages/Feedback";
import { TermsAndConditions } from "./components/pages/Terms";
import { MentorContact } from "./components/pages/MentorContact";
import { Dashboard } from "./components/pages/Dashboard";
import { MentorRegister } from "./components/pages/MentorRegister";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#794de8",
        light: "#af7bff",
        dark: "#800fbd",
        mainGradient:
          "linear-gradient(91.91deg, #95ACFF 1.51%, #C6A2FF 98.39%)",
        contrastText: "#FFF7F0",
        secondaryGradient:
          "linear-gradient(90deg, #B17FE2 16.67%, #B44CF4 84.37%)",
      },
      background: {
        paper: "#F9F9F9",
        default: "#F9F9F9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mentor/match" element={<MatchFinder />} />
              <Route path="/mentor/search" element={<SearchResults />} />
              <Route path="/mentor/:mentorID" element={<MentorDetail />} />
              <Route
                path="/mentor/:mentorID/contact"
                element={<MentorContact />}
              />
              <Route path="/mentor/register" element={<MentorRegister />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/feedback" element={<SendFeedback />} />
              <Route
                path="/termsAndConditions"
                element={<TermsAndConditions />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
