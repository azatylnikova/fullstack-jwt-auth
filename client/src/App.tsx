import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Box } from "@mui/material";

export const App = () => {
  return (
    <Box
      sx={{
        margin: "34px",
        background: "#fffffff0",
        borderRadius: "8px",
        minHeight: "100%",
        boxShadow: "-2px 1px 24px -11px rgba(34, 60, 80, 1)",
        padding: "22px",
        boxSizing: "border-box"
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Box>
  );
};

export default App;
