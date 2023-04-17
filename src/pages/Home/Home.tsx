import { memo } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Typewriter } from 'react-simple-typewriter'
import Section from '../../ui/Section'
import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../ui/PrimaryButton'

const backgroundStyle = {
  position: 'relative',
  minHeight: '100vh',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center'
}

function Home () {
  const { t } = useTranslation()
  return (
    <Section id="">
      <Container maxWidth="lg">
        <Grid container sx={backgroundStyle}>
          <Grid item>
            <Typography variant="h3" color="text.primary">
              {'Joaquin Pettinari'}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography variant={'h5'} width={'100%'}>
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
            <PrimaryButton sx={{ mt: 2 }} href="#contact-me">
              {t('home.getInTouch')}
            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default memo(Home)
