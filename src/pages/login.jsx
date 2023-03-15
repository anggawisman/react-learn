import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../components/copyright";
import { useNavigate } from "react-router-dom";
import { Alert, IconButton } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";
import axios from "axios";

// const theme = createTheme();

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `api/v1/users/login`,

        {
          email: data.email,
          password: data.password,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          alert(res.data.status);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      });
  };

  function handle(event) {
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={(event) => handleSubmit(event)}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            onChange={(event) => handle(event)}
            required
            id="email"
            value={data.email}
            label="Email Address"
            variant="filled"
            fullWidth
            autoComplete="email"
            name="email"
            autoFocus
          />
          <TextField
            onChange={(event) => handle(event)}
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            value={data.password}
            autoComplete="current-password"
            variant="filled"
          />
          <IconButton
            aria-label="fingerprint"
            color="success"
            sx={{ mt: 3, mb: 2 }}
            // onClick={() => navigate("/dashboard")}
            onClick={handleSubmit}
          >
            <Fingerprint />
          </IconButton>
        </Box>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Box>
      <Copyright sx={{ mt: 10, mb: 4 }} />
    </Container>
    // </ThemeProvider>
  );
}
