import { memo } from 'react'
import { Grid, Typography } from '@mui/material'

function Home () {
  return (
    <Grid container>
      <Typography color={'primary'}>Primary mui</Typography>
    </Grid>
  )
}

export default memo(Home)