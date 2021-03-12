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
  TextField,
} from "@material-ui/core";
function LoginScreen() {
  return (
    <div className="loginScreen__wrapper">
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          flexGrow: 1,
          justifyContent: "space-between",
          backgroundColor: "rgba(0,0,0,1)",
        }}
      >
        <Toolbar style={{ margin: 0, padding: 0 }}>
          <IconButton style={{ marginRight: "auto" }}>
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              alt="netflix log"
              className="loginScreen__logo"
              style={{ marginLeft: 15 }}
            />
          </IconButton>
          <Button
            variant="contained"
            style={{
              marginRight: 20,
              backgroundColor: "#e50914",
              color: "white",
              cursor: "pointer",
            }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <div className="loginScreen__gradient"></div>
      <Container className="loginScreen">
        <Grid
          Container
          style={{
            color: "white",
            margin: "auto",
            maxWidth: 646,
            display: "flex",
            flexDirection: "column",
            paddingTop: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            style={{
              fontSize: 60,
              textAlign: "center",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            style={{
              fontSize: 26,
              textAlign: "center",
              margin: "16px 105.5px",
            }}
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            style={{
              fontSize: 19,
              textAlign: "center",
              margin: "0 73.5px",
              padding: "0px 42.5469px 20px",
              whiteSpace: "nowrap",
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>

          <Grid item style={{ Display: "flex", flexDirection: "row" }}>
            <TextField
              id="outlined-search"
              label="Email address"
              type="search"
              variant="filled"
              style={{
                backgroundColor: "white",
                borderRadius: "2px 0px 0px 2px",
                Width: "69.5%",
                fontWeight: 700,
                color: "#8c8c8c",
              }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#e50914",
                color: "white",
                cursor: "pointer",
                flexGrow: 1,
                flexBasis: "auto",
                minHeight: 56,
                borderRadius: "0px 2px 2px 0px",
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginScreen;
