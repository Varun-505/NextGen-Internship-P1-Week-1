import React from "react";
import { Box, Typography, Button, TextField, Container } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4caf50, #1a73e8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "300",
            marginBottom: "30px",
            fontSize: { xs: "1rem", md: "1.25rem" },
            opacity: 0.9,
          }}
        >
          Login to continue collaborating with your team.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ff9800",
              borderRadius: "50px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e68900" },
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
