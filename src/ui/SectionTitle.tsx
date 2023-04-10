import { memo } from 'react'
import { Box, Grid, Typography } from '@mui/material'

interface SectionTitleProps {
  title: string
}

function SectionTitle ({ title }: SectionTitleProps) {
  return (
    <Grid item xs={4}>
      <Box
        sx={{
          borderBottom: '1px solid black',
          borderTop: '1px solid black',
          borderRadius: '0',
          marginTop: '90px',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          fontFamily={'fantasy'}
          fontWeight={400}
        >
          {title}
        </Typography>
      </Box>
    </Grid>
  )
}

export default memo(SectionTitle)
