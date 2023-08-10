import { Link } from "react-router-dom";
// HOOKS
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
import BackgroundVideo from "../Assets/LoginHeroVideo.mov";
function LoginForm() {
  // HOOKS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  // Login Form
  const login = event => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
      // Send Error if inputs invalid
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; 

  return (
    <div className="background-video form-section">
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <form className="formPanel" onSubmit={login} style={{ zIndex: 1 }}>
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
            Login
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
            Login
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/registration" variant="body2">
                Register
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default LoginForm;
