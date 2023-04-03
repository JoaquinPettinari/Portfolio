import { memo } from 'react'
import NavBar from '../../ui/NavBar'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import Section from '../../ui/Section'
import homeBackground from '../../assets/homeBackground.jpg'

const backgroundStyle = {
  backgroundImage: `url(${homeBackground})`,
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center'
}

function Home () {
  return (
    <Section id="">
      <NavBar />
      <Grid container sx={backgroundStyle}>
        <Grid item>
          <Typography variant="h3">{'Joaquin Pettinari'}</Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant={'h5'} width={'100%'}>
              {'<I am '}
              <Typewriter
                words={[
                  'Front End Developer />',
                  'graduate degree in Computer Science />',
                  'student />'
                ]}
                cursor
                loop={10}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
          </Box>
          <Button variant="contained" sx={{ mt: 2 }} href="#contact-me">
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export default memo(Home)
