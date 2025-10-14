import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./ImageWithFallback";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          borderRadius: 4,
          width: 350,
          overflow: "hidden",
          boxShadow: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
          position: "relative",
        }}
      >
        {/* Image */}
        <Box sx={{ position: "relative" }}>
          <ImageWithFallback
            src={product.main_image_url}
            alt={product.name}
            style={{
              width: "100%",
              height: 260,
              objectFit: "cover",
              transition: "transform 0.3s",
            }}
          />

          {/* Optional Rating placeholder */}
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "#FFD93D",
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Star size={16} color="white" />
            <Typography variant="body2" sx={{ color: "white" }}>
              {/* Replace with real rating if available */}
              4.5
            </Typography>
          </Box>
        </Box>

        {/* Content */}
        <CardContent>
          <Chip
            label={product.category_name}
            sx={{
              bgcolor: "#4D96FF",
              color: "white",
              mb: 1,
              fontSize: "0.75rem",
              px: 1.5,
              py: 0.25,
            }}
          />

          <Typography variant="h6" sx={{ mb: 1, color: "text.primary" }}>
            {product.name}
          </Typography>

          <Typography variant="h6" sx={{ color: "#FF6B6B" }}>
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
