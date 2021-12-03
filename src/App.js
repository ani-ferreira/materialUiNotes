import { Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [activeDark, setActiveDark] = useState(false);

  /* first: dark, second: light */

  let mode = {};

  if (activeDark) {
    mode = {
      primary: {
        main: "#e2e2ff",
      },
      secondary: {
        main: "#ffb000",
      },
      background: {
        default: "#00334d",
        paper: "#002233",
      },
      text: {
        primary: "#e2e2ff",
        secondary: "#eaeeff",
      },
    };
  }
  if (!activeDark) {
    mode = {
      primary: {
        main: "#6562cf",
      },
      secondary: {
        main: "#333",
      },
      background: {
        default: "#fafafa",
        paper: "#fafafa",
      },
      text: {
        primary: "#8c8c8c",
        secondary: "#8c8c8c",
      },
    };
  }

  const theme = createTheme({
    palette: mode,
  });

  const handleDark = () => {
    setActiveDark(!activeDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home onChangeValue={handleDark} />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
