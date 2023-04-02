import { Typography } from '@mui/material'
import { memo } from 'react'
import Section from '../../ui/Section'

function AboutMe () {
  return (
    <Section id="about-me">
      <Typography color="primary">About Me</Typography>
    </Section>
  )
}

export default memo(AboutMe)
