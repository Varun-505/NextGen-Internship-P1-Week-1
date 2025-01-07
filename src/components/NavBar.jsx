import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";

const NavBar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="static" sx={{ background: "linear-gradient(to right, #1a73e8, #4caf50)" }}>
      <Toolbar>
        {/* Brand Name Route to Landing Page */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textDecoration: "none",
            color: "inherit",
            "&:hover": { color: "#ff9800" },
          }}
        >
          Collab-Tool
        </Typography>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/register" color="inherit">
          Register
        </Button>
        <Button component={Link} to="/dashboard" color="inherit">
          Dashboard
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
