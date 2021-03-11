import React from "react";
import "./LoginScreen.css";

import {
  Grid,
  Typography,
  Paper,
  Container,
  IconButton,
  Box,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";
function LoginScreen() {
  return (
    <div className="loginScreen__wrapper">
      <Container className="loginScreen">
        <AppBar
          position="static"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            flexGrow: 1,
            justifyContent: "space-between",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Toolbar style={{ margin: 0, padding: 0 }}>
            <IconButton style={{ marginRight: "auto" }}>
              <img
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                alt="netflix log"
                className="loginScreen__logo"
              />
            </IconButton>
            <Button variant="contained" className="loginScreen__button">
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
        <Grid item style={{ color: "white", margin: "auto" }}>
          {" Hello"}
        </Grid>
      </Container>
      <div className="loginScreen__gradient"></div>
    </div>
  );
}

export default LoginScreen;
