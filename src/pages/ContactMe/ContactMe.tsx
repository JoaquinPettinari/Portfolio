import { Box, Typography } from '@mui/material'
import { memo } from 'react'

function ContactMe () {
  return (
    <Box id="contact-me">
      <Typography variant="h1" color="primary">
        Contact Me
      </Typography>
    </Box>
  )
}

export default memo(ContactMe)
