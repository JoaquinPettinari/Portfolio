import { Box, Button, Grid } from '@mui/material'
import { memo } from 'react'
import spain from '../assets/spain.png'
import england from '../assets/england.png'
import { LANGUAGUE } from '../utils/languages'
import { equals } from 'ramda'
import { LayoutDivider } from './Layout'
import { useTranslation } from 'react-i18next'

interface LanguageIconProps {
  onClick: (language: string) => void
  languague: string
  image: string
  currentLanguage: string
}

function LanguageSwitch () {
  const { i18n } = useTranslation()
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <Box sx={{ position: 'fixed', bottom: 0, right: 25 }}>
      <Grid
        container
        flexDirection={'column'}
        alignItems={'center'}
        spacing={1}
      >
        <Grid item>
          <LanguageIcon
            image={spain}
            onClick={changeLanguage}
            languague={LANGUAGUE.Es}
            currentLanguage={i18n.language}
          />
        </Grid>
        <Grid item>
          <LanguageIcon
            image={england}
            onClick={changeLanguage}
            languague={LANGUAGUE.En}
            currentLanguage={i18n.language}
          />
        </Grid>
        <Grid item>
          <LayoutDivider />
        </Grid>
      </Grid>
    </Box>
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

export default memo(LanguageSwitch)
