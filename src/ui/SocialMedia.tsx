import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Grid, Box, IconButton } from '@mui/material'
import { memo, useMemo } from 'react'
import { LayoutDivider } from './Layout'

function SocialMedia () {
  const socialMediaList = useMemo(
    () => [
      {
        Icon: LinkedInIcon,
        link: 'https://www.linkedin.com/in/joaquin-pettinari/'
      },
      { Icon: GitHubIcon, link: 'https://github.com/JoaquinPettinari' },
      {
        Icon: InstagramIcon,
        link: 'https://www.instagram.com/joaquin.pettinari/'
      }
    ],
    []
  )
  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 25, zIndex: 1000 }}>
      <Grid container flexDirection={'column'} alignItems={'center'}>
        {socialMediaList.map(({ Icon, link }, index) => (
          <Grid item key={index}>
            <IconButton
              sx={{ color: 'primary.light', cursor: 'pointer' }}
              onClick={() => window.open(link, '_blank')}
            >
              <Icon />
            </IconButton>
          </Grid>
        ))}
        <Grid item>
          <LayoutDivider />
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(SocialMedia)
