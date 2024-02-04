import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <main className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* CssBaseline to provide some basic styling normalization, such as setting margin & padding to 0. */}
          <CssBaseline />
          {/* ROUTES */}
          <Routes>
            {/* Layout for every page */}
            <Route element={<Layout />}>
              {/* explained redirection with Navigate: https://jsaugat.notion.site/redirect-user-d01345cee24a47e3ad427d902e5aa25c?pvs=74 */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
