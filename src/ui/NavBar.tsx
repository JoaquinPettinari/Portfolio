import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import MenuItem from '@mui/material/MenuItem'
import { type MouseEvent, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function NavBar () {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const { t } = useTranslation()
  const pages = useMemo(
    () => [
      {
        label: t('navbar.about'),
        link: '#about-me'
      },
      {
        label: t('navbar.jobs'),
        link: '#jobs'
      },
      {
        label: t('navbar.studies'),
        link: '#studies'
      },
      {
        label: t('navbar.contact'),
        link: '#contact-me'
      }
    ],
    [t]
  )

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              JP
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map(({ label, link }, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Button href={link} sx={{ textTransform: 'capitalize' }}>
                      {label}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              JP
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center'
              }}
            >
              {pages.map(({ label, link }, index) => (
                <Button
                  key={index}
                  href={link}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}

function HideOnScroll (props: Props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window != null ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default NavBar
