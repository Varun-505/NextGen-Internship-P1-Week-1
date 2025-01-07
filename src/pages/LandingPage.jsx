import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #1a73e8, #4caf50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Collaborate in Real-Time
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "300",
            marginBottom: "30px",
            fontSize: { xs: "1rem", md: "1.25rem" },
            opacity: 0.9,
          }}
        >
          Empower your team with seamless collaboration tools. Work together
          like never before, anytime and anywhere.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              margin: "10px",
              textTransform: "none",
              borderRadius: "50px",
              backgroundColor: "#ff9800",
              "&:hover": { backgroundColor: "#e68900" },
            }}
            component={Link}
            to="/register"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            sx={{
              margin: "10px",
              textTransform: "none",
              borderRadius: "50px",
              borderColor: "white",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
