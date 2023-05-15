import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const login = () => {
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    fetch("/login", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": csrfToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((response) => {
      window.location = "/projects";
    });
  };
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      spacing={2}
      alignItems={"center"}
      style={{ marginTop: "200px" }}
    >
      <Grid item xs={10}>
        <TextField
          label="Username"
          variant="outlined"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
