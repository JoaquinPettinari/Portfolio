import { Grid } from '@mui/material'
import { memo } from 'react'
import Section from '../../ui/Section'
import joaquinPhoto from '../../assets/joaquinPicture.jpg'
import AboutMeText from './AboutMeText'

const photoStyle = {
  height: '300px',
  width: '300px',
  '@media (max-width:960px)': {
    // eslint-disable-line no-useless-computed-key
    height: '400px',
    width: '400px'
  },
  '@media (max-width:600px)': {
    // eslint-disable-line no-useless-computed-key
    height: 'auto',
    width: '90%'
  }
}

function AboutMe () {
  return (
    <Section id="about-me">
      <Grid container item alignContent={'center'} justifyContent={'center'}>
        <Grid item xs={8} md={4}>
          <img
            src={joaquinPhoto}
            alt="Photo about me in Perito Moreno, Patagonia Argentina"
            style={photoStyle}
          />
        </Grid>
        <Grid item xs={8} md={4}>
          <AboutMeText />
        </Grid>
      </Grid>
    </Section>
  )
}

export default memo(AboutMe)
