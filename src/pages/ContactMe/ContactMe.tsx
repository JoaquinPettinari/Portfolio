import { Typography } from '@mui/material'
import { memo } from 'react'
import Section from '../../ui/Section'

function ContactMe () {
  return (
    <Section id="contact-me">
      <Typography variant="h1" color="primary">
        Contact Me
      </Typography>
    </Section>
  )
}

export default memo(ContactMe)
