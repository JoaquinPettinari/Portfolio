import { Grid, Container } from '@mui/material'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Jobs from './pages/Jobs/Jobs'
import ContactMe from './pages/ContactMe/ContactMe'
import Studies from './pages/Studies/Studies'
import './i18n'

function App () {
  return (
    <Grid container>
      <Home />
      <Container maxWidth="lg" sx={{ pt: 60 }}>
        <AboutMe />
        <Jobs />
        <Studies />
        <ContactMe />
      </Container>
    </Grid>
  )
}

export default App
