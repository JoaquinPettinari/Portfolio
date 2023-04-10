import { memo } from 'react'
import { Divider, Grid, Typography } from '@mui/material'

interface SectionTitleProps {
  title: string
}

function SectionTitle ({ title }: SectionTitleProps) {
  return (
    <Grid item xs={5}>
      <Divider>
        <Typography
          variant="h3"
          color="primary"
          fontFamily={'math'}
          fontWeight={400}
        >
          {title}
        </Typography>
      </Divider>
    </Grid>
  )
}

export default memo(SectionTitle)
