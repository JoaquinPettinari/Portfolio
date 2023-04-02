import { Typography } from '@mui/material'
import { memo } from 'react'
import Section from '../../ui/Section'

function Jobs () {
  return (
    <Section id="jobs">
      <Typography color="primary">Jobs</Typography>
    </Section>
  )
}

export default memo(Jobs)
