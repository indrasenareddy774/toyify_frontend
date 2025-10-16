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
import CustomIconButton from "./CustomIconButton";
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
          width: "80%",
          // px: "30px",
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
          <Button color="inherit" component={Link} to="/product">
            Product
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
          <CustomIconButton Icon={SearchIcon} bgColor="#FFC107" />
          <CustomIconButton Icon={FavoriteBorderIcon} bgColor="#e53e89ff" />
          <CustomIconButton Icon={ShoppingCartIcon} bgColor="#2196F3" />
          <CustomIconButton Icon={AccountCircleIcon} bgColor="#4ddb00ff" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
