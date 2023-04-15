import { Divider, Grid } from '@mui/material'
import SocialMedia from './SocialMedia'
import LanguageSwitch from './LanguageSwitch'

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
  <Divider orientation="vertical" sx={{ height: 90, borderWidth: 2 }} />
)

export default Layout
