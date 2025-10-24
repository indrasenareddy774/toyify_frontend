import React from "react";
import { Box } from "@mui/material";
import LoginSection from "../sections/LoginSection";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <LoginSection />
    </Box>
  );
}
