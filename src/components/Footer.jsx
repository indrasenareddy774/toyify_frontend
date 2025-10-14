import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        mt: "auto",
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Typography>
    </Box>
  );
}
