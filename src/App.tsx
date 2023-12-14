import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import Navbar from "./scenes/navbar";
import Dashboard from "./scenes/dashboard";
import Predictions from "./scenes/predictions";
import LoginComponent from "./scenes/login";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("user77") as string;
    if (storedUser !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [user, redirect]);

  // if !users ==  always navigate to /. let the homepage make reference to redirect to login itself
  const theme = useMemo(() => createTheme(themeSettings), []);
  // const theme2 = useMemo(() => createTheme(themeSettings2), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="login" />}
              />
              <Route
                path="/predictions"
                element={user ? <Predictions /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <LoginComponent />}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
