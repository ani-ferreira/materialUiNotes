import { Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Layout from "./pages/components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cdcacf",
    },
    secondary: deepPurple,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/create" element={<CreateNote />} />
          <Route path="/" element={<Notes />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
