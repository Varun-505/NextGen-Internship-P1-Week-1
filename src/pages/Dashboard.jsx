import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #673ab7, #2196f3)",
        color: "white",
        padding: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "30px" }}>
          Your Dashboard
        </Typography>
        <Grid container spacing={4}>
          {[...Array(3)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Project {index + 1}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                    Explore the details of this Project to boost your collaboration.
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: "#ff9800" }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
