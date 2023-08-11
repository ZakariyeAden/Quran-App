import { Link } from "react-router-dom";
// HOOKS
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// MUI and Assets
import {
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import QuranLogo from "../Assets/QuranLogo.png";
const Form = () => {
  // HOOKS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  // Register User on Submit and Login
  const registerUser = event => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  };
  return (
    <div>
      <form className="formPanel" onSubmit={registerUser} style={{ zIndex: 1 }}>
        {/* ALERT Message for Login */}
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={QuranLogo} alt="Quran/Islam Logo" width="150" />
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="password"
                required
                fullWidth
                name="username"
                label="username"
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default Form;
