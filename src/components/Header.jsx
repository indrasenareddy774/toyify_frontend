import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: "auto",
          width: "90%",
        }}
      >
        {/* Left Icons */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            MyLogo
          </Typography>
        </Box>

        {/* Center Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/shop">
            Shop
          </Button>
          <Button color="inherit" component={Link} to="/category">
            Category
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>

        {/* Right Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {[
            SearchIcon,
            FavoriteBorderIcon,
            ShoppingCartIcon,
            AccountCircleIcon,
          ].map((Icon, index) => (
            <IconButton
              key={index}
              color="inherit"
              sx={{
                // border: "1px solid white",
                borderRadius: "50%",
                p: 1,
                bgcolor: "#FF4444",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "white",
                  color: "primary.main",
                },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
