import { memo } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import Section from '../../ui/Section'
import homeBackground from '../../assets/homeBackground.jpg'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <Section id="">
      <Grid container sx={backgroundStyle}>
        <Grid item>
          <Typography color="secondary" variant="h3">
            {'Joaquin Pettinari'}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography color="secondary" variant={'h5'} width={'100%'}>
              {t('home.iAm')}
              <Typewriter
                words={[
                  t('home.frontEnd'),
                  t('home.graduate'),
                  t('home.student')
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
            {t('home.getInTouch')}
          </Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export default memo(Home)
