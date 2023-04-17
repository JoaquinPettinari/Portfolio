import { Divider, Grid } from '@mui/material'
import SocialMedia from './SocialMedia'
import LanguageSwitch from './LanguageSwitch'
import theme from '../theme'

interface LayoutProps {
  children: React.ReactNode
}

function Layout ({ children }: LayoutProps) {
  return (
    <Grid
      container
      justifyContent={'center'}
      sx={{ backgroundColor: 'background.default' }}
    >
      <SocialMedia />
      <Grid item xs={12}>
        {children}
      </Grid>
      <LanguageSwitch />
    </Grid>
  )
}

export const LayoutDivider = () => (
  <Divider
    orientation="vertical"
    sx={{
      height: 90,
      borderWidth: 1,
      borderColor: theme.palette.primary.light
    }}
  />
)

export default Layout
