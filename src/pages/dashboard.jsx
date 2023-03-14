import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/appbar";
import Table from "../components/table";
import {
  createTheme,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Dashboard() {
  const [situation, setSituation] = React.useState("");

  const handleChange = (event) => {
    setSituation(event.target.valueSituation);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Container> */}
      <ResponsiveAppBar />
      <Grid item xs={12} sx={{ pt: 4 }}>
        <Grid container justifyContent="center">
          <Grid item xs={2}>
            <Box component="form" noValidate autoComplete="off">
              <FormControl
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                    justifyContent: "space-around",
                  },
                }}
              >
                <InputLabel id="situation-label">Situation</InputLabel>
                <Select
                  labelId="situation-label"
                  id="situation"
                  value={situation}
                  onChange={handleChange}
                  label="Situation"
                >
                  <MenuItem valueSituation="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem valueSituation={10}>Normal</MenuItem>
                  <MenuItem valueSituation={10}>Urgent</MenuItem>
                </Select>
                <TextField
                  required
                  id="standard-required"
                  label="Problem Issue"
                  variant="standard"
                />
                <TextField
                  required
                  multiline
                  id="description"
                  label="Description"
                  variant="standard"
                />
                <TextField
                  required
                  id="status"
                  label="Status"
                  variant="standard"
                />
              </FormControl>
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
