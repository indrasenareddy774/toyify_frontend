import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { CategoryCard } from "../components/CategoryCard";
import { getCategories, getProducts } from "../api/api";
// import { ImageWithFallback } from "./ImageWithFallback";

export default function LandingPage() {
  const [categories, setCategories] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Fetch categories
    getCategories(1, 8) // get first 8 categories
      .then((data) => setCategories(data.categories))
      .catch((err) => console.error(err));

    // Fetch products
    getProducts(1, 6) // get first 6 products
      .then((data) => setBestSellers(data.products || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #FFD93D, #FF6B6B, #4D96FF)",
          color: "white",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Fun & Safe Toys for Every Kid 🎉
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Discover amazing toys that inspire creativity, learning, and
              endless fun!
            </Typography>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowRight />}
                sx={{
                  px: 5,
                  py: 2,
                  borderRadius: "50px",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "inline-block",
                position: "relative",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "white",
                  opacity: 0.2,
                  borderRadius: 4,
                  filter: "blur(20px)",
                }}
              />
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1638897481243-42fa0664785f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheWluZyUyMHRveXN8ZW58MXx8fHwxNzU5NTgwNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kids playing with toys"
                className="rounded-3xl shadow-2xl w-full max-w-md"
                style={{ borderRadius: "24px", maxWidth: 400 }}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Categories Section */}
      <Box sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 2,
            background: "linear-gradient(to right, #FF6B6B, #4D96FF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Shop by Category
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 4, color: "gray" }}
        >
          Find the perfect toy for your little one
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Best Sellers Section */}
      <Box sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 2,
            background: "linear-gradient(to right, #FF6B6B, #4D96FF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Best Sellers 🌟
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 4, color: "gray" }}
        >
          Top picks loved by kids and parents!
        </Typography>

        <Grid container spacing={4}>
          {bestSellers.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 2,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: "bold",
                background: "linear-gradient(to right, #FF6B6B, #4D96FF)",
              }}
            >
              View All Products
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
