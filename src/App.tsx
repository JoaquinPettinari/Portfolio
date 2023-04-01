import { Grid, Container } from '@mui/material'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Jobs from './pages/Jobs/Jobs'
import ContactMe from './pages/ContactMe/ContactMe'
import Study from './pages/Study/Study'

function App () {
  return (
    <Grid container>
      <Home />
      <Container maxWidth="lg">
        <AboutMe />
        <Jobs />
        <Study />
        <ContactMe />
      </Container>
    </Grid>
  )
}

export default App
