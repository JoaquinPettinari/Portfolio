import { Grid } from '@mui/material'
import { memo } from 'react'

interface SectionProps {
  children: React.ReactNode
  id: string
}

function Section ({ children, id }: SectionProps) {
  return (
    <Grid id={id} container justifyContent={'center'} height={'100vh'}>
      {children}
    </Grid>
  )
}

export default memo(Section)
