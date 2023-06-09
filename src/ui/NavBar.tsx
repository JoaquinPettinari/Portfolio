import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import MenuItem from '@mui/material/MenuItem'
import { type MouseEvent, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CVJoaquin from '../assets/Joaquin_Pettinari_Resume.pdf'

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
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ backgroundColor: 'background.default' }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            color="primary.main"
            sx={{
              ml: '35px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
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
              sx={{ color: 'primary.main' }}
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
                  <Button href={link}>
                    {`0${index + 1}.`}&nbsp;<Typography>{label}</Typography>
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
            color="primary.main"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            JP
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end'
            }}
          >
            {pages.map(({ label, link }, index) => (
              <Button key={index} href={link} sx={{ my: 2, display: 'flex' }}>
                {`0${index + 1}.`}&nbsp;<Typography>{label}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ mx: '35px', display: { xs: 'none', md: 'flex' } }}>
            <Button variant="outlined" href={CVJoaquin} target="_blank">
              {t('about.downloadCV')}
            </Button>
          </Box>
        </Toolbar>
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
