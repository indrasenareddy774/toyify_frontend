import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Popover,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomIconButton from "./CustomIconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCard from "./AccountCard";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle account popover

  const handleAccountClick = (event) => {
    // Toggle open/close behavior
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "account-popover" : undefined;
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
          <CustomIconButton
            Icon={AccountCircleIcon}
            bgColor="#4ddb00ff"
            onClick={handleAccountClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: { borderRadius: 2, mt: 1 },
            }}
          >
            <AccountCard />
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
