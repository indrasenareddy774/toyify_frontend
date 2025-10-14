import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./ImageWithFallback"; // adjust path if needed

export const CategoryCard = ({ category }) => {
  return (
    <Link to="/shop" style={{ textDecoration: "none" }}>
      <Card
        sx={{
          borderRadius: 4,
          textAlign: "center",
          boxShadow: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
          cursor: "pointer",
          p: 2,
        }}
      >
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <ImageWithFallback
              src={category.image_url}
              alt={category.name}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            {category.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
