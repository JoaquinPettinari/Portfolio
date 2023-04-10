import { Fragment, memo } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CVJoaquin from '../../assets/Joaquin_Pettinari_Resume.pdf'

function AboutMeText () {
  const { t } = useTranslation()
  return (
    <Fragment>
      <Typography variant="h5">{t('about.profession')}</Typography>
      <Typography
        variant="subtitle1"
        sx={{ lineHeight: '1.3', marginTop: '10px' }}
      >
        {t('about.myDescription.first')}
        <br />
        {t('about.myDescription.second')}
        <br />
        <br />
        {t('about.myDescription.third')}
      </Typography>
      <Grid item xs={8} sm={5} md={5} mt={2}>
        <Button variant="contained" href={CVJoaquin} fullWidth target="_blank">
          {t('about.downloadCV')}
        </Button>
      </Grid>
    </Fragment>
  )
}

export default memo(AboutMeText)
