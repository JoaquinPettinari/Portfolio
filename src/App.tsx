import "./App.css";
import { Grid, Container } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <Grid container>
      <Home />
      <Container maxWidth="lg">Home</Container>
    </Grid>
  );
}

export default App;
