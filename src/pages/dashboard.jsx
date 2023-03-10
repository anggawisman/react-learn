import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/appbar";
import Table from "../components/table";
import { Container } from "@mui/system";
import {
  Card,
  CardContent,
  createTheme,
  CssBaseline,
  FormControl,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Container> */}
      <ResponsiveAppBar />
      <Grid item xs={12} sx={{ pt: 4 }}>
        <Grid container justifyContent="space-evenly">
          <Grid item xs={4}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "25ch",
                  justifyContent: "space-around",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="standard-required"
                label="Problem Issue"
                variant="filled"
              />
              <TextField
                required
                multiline
                id="filled-required"
                label="Description"
                variant="filled"
              />
              <TextField
                required
                multiline
                id="filled-required"
                label="Description"
                variant="filled"
              />
              <TextField
                required
                multiline
                id="filled-required"
                label="Description"
                variant="filled"
              />
              <TextField
                required
                multiline
                id="filled-required"
                label="Description"
                variant="filled"
              />
            </Box>
          </Grid>
          <Grid item>
            <Table />
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </ThemeProvider>
  );
}
