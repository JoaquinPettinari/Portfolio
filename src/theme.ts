import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#64ffda',
      dark: '#171717',
      light: '#a8b2d1'
    },
    secondary: {
      main: '#86868B'
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0'
    },
    background: {
      default: '#0a192f'
    }
  },
  typography: {
    button: {
      textTransform: 'capitalize'
    },
    allVariants: {
      color: '#ccd6f6'
    }
  }
})

export default theme
