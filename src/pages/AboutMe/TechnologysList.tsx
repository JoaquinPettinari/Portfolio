import { Grid, Paper, Typography } from '@mui/material'
import { memo } from 'react'

interface TechnologysListProps {
  label: string
  technologys: Technology[]
}

interface Technology {
  icon: string
  alt: string
}

function TechnologysList ({ technologys, label }: TechnologysListProps) {
  return (
    <Grid container justifyContent="center" textAlign={'center'}>
      <Grid item>
        <Typography variant="h5">{label}</Typography>
      </Grid>
      <Grid container item justifyContent={'center'} xs={12} spacing={2} pt={1}>
        {technologys.map(({ icon, alt }, index) => {
          return (
            <Grid item key={index} style={{ minHeight: 'max-content' }}>
              <Paper
                elevation={0}
                sx={{ padding: 2, textAlign: 'center', borderRadius: 1 }}
              >
                <img
                  src={icon}
                  alt={alt}
                  style={{ minWidth: '4rem', height: '4rem' }}
                />
                <Typography variant="subtitle1">{alt}</Typography>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default memo(TechnologysList)
