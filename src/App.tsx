import { Grid, Container } from '@mui/material'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Jobs from './pages/Jobs/Jobs'
import ContactMe from './pages/ContactMe/ContactMe'
import Studies from './pages/Studies/Studies'
import './i18n'
import NavBar from './ui/NavBar'
import Layout from './ui/Layout'

function App () {
  return (
    <Grid container>
      <NavBar />
      <Layout>
        <Home />
        <Container maxWidth="lg">
          <AboutMe />
          <Jobs />
          <Studies />
          <ContactMe />
        </Container>
      </Layout>
    </Grid>
  )
}

export default App
