import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/appbar";
import Table from "../components/table";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  createTheme,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProblems, getMe } from "../api";
import axios from "axios";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Dashboard() {
  const [me, setMe] = useState([]);

  useEffect(() => {
    getMe()
      .then((results) => {
        setMe(results);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
        navigate("/login");
      });
  }, []);

  const navigate = useNavigate();
  const [data, setData] = React.useState({
    situation: "",
    title: "",
    description: "",
    status: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    console.log(event.target.name);
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`api/v1/problems`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          alert(res.data.status);
        }
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      });
  };

  console.log(data);
  if (me.status === "success") {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <Container> */}
        <ResponsiveAppBar />
        <Grid item xs={12} sx={{ pt: 4 }}>
          <Grid container justifyContent="center">
            <Grid item xs={2}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <FormControl
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: "25ch",
                      justifyContent: "space-around",
                    },
                  }}
                >
                  <TextField
                    name="situation"
                    value={data.situation}
                    onChange={handleChange}
                    required
                    id="standard-required"
                    label="Situation"
                    variant="standard"
                  />
                  <TextField
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    required
                    id="standard-required"
                    label="Problem Issue"
                    variant="standard"
                  />
                  <TextField
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                    multiline
                    id="description"
                    label="Description"
                    variant="standard"
                  />
                  <TextField
                    name="status"
                    value={data.status}
                    onChange={handleChange}
                    id="status"
                    label="Status"
                    variant="standard"
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Table />
            </Grid>
          </Grid>
        </Grid>
        {/* </Container> */}
      </ThemeProvider>
    );
  }
}
