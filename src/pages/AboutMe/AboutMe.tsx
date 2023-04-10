import { Grid } from '@mui/material'
import { memo } from 'react'
import Section from '../../ui/Section'
import joaquinPhoto from '../../assets/joaquinPicture.jpg'
import AboutMeText from './AboutMeText'
import ReactIcon from '../../assets/ReactImage.png'
import JSIcon from '../../assets/jsImage.png'
import ReduxImage from '../../assets/reduxImage.png'
import MaterialUiImage from '../../assets/material-ui.png'
import MongoDBImage from '../../assets/mongoDBImage.png'
import HtmlImage from '../../assets/html.png'
import TsImage from '../../assets/ts.png'
import CssImage from '../../assets/CSS.png'
import NodeJsImage from '../../assets/nodejs.png'
import TechnologysList from './TechnologysList'

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
      <Grid
        container
        item
        alignContent={'center'}
        justifyContent={'center'}
        pt={2}
      >
        <Grid item xs={12} sm={5} md={4}>
          <img
            src={joaquinPhoto}
            alt="Photo about me in Perito Moreno, Patagonia Argentina"
            style={photoStyle}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <AboutMeText />
        </Grid>
        <Grid item xs={8} pt={4}>
          <TechnologysList
            technologys={technologys}
            label="Programming Languages"
          />
        </Grid>
        <Grid item xs={8} pt={4}>
          <TechnologysList
            technologys={librariesAndFrameworks}
            label="Libraries & Frameworks"
          />
        </Grid>
      </Grid>
    </Section>
  )
}

const technologys = [
  { icon: JSIcon, alt: 'JavaScript' },
  { icon: TsImage, alt: 'TypeScript' },
  { icon: HtmlImage, alt: 'HTML' },
  { icon: CssImage, alt: 'CSS' }
]

const librariesAndFrameworks = [
  { icon: ReduxImage, alt: 'Redux' },
  { icon: NodeJsImage, alt: 'NodeJs' },
  { icon: ReactIcon, alt: 'React' },
  { icon: MongoDBImage, alt: 'MongoDB' },
  { icon: MaterialUiImage, alt: 'MUI' }
]

export default memo(AboutMe)
