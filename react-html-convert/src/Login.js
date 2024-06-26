import React, { useState } from "react";
import { Link } from "react-router-dom";
import cover from "../src/download.jpeg";

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <Grid container >
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage:`url(${cover})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={7}>
        <Paper elevation={3} sx={{ p: 3, maxWidth: 600, height: '100vh', width: '100%' }}>
          <Box textAlign="center" mb={3}>
            <Typography variant="h4">Login Now</Typography>
            <Typography variant="subtitle1">Let's the party begin</Typography>
          </Box>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Link to="/register" style={{ textDecoration: "none" }}>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
            </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
