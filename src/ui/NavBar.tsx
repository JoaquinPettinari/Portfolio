import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import spain from '../assets/spain.png'
import england from '../assets/england.png'
import { type MouseEvent, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGUE } from '../utils/languages'
import { equals } from 'ramda'

interface LanguageIconProps {
  onClick: (language: string) => void
  languague: string
  image: string
  currentLanguage: string
}

function NavBar () {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const { t, i18n } = useTranslation()
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

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            href=""
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
          <Box sx={{ flexGrow: 0 }}>
            <LanguageIcon
              image={spain}
              onClick={changeLanguage}
              languague={LANGUAGUE.Es}
              currentLanguage={i18n.language}
            />
            <LanguageIcon
              image={england}
              onClick={changeLanguage}
              languague={LANGUAGUE.En}
              currentLanguage={i18n.language}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const LanguageIcon = ({
  onClick,
  languague,
  image,
  currentLanguage
}: LanguageIconProps) => (
  <Button
    onClick={() => {
      onClick(languague)
    }}
    sx={{
      backgroundColor: equals(languague, currentLanguage) ? '#333333' : ''
    }}
  >
    <img src={image} alt={languague} />
  </Button>
)

export default NavBar
