import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Section } from 'components/organisms'
import { SectionHeader } from 'components/molecules'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    margin: 30,
  },
  stepsContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  step: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    margin: 30,
    maxWidth: 350,
    [theme.breakpoints.down('sm')]: {
      margin: 16,
    },
  },
  stepPicture: {
    width: 150,
    height: 150,
    margin: '0 auto 15px',
  },
  stepTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stepText: {},
  buttonContainers: {
    display: 'flex',
    '& a': {
      marginRight: 5,
      marginLeft: 5,
    },
  },
  videoContainer: {
    position: 'relative',
    marginBottom: 50,
    width: '100%',
    maxWidth: 618,
    height: 325,
    maxHeight: 325,
    [theme.breakpoints.down('md')]: {
      height: 295,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
  },
  videoIframe: {
    boxShadow: '0 5px 15px 0 rgba(30,76,165,.2)',
    borderRadius: theme.spacing(1),
  },
}))

const HowItWorks = props => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <Section className={classes.root}>
      <div className={classes.videoContainer}>
        <iframe
          width={'100%'}
          height={'100%'}
          src={'https://www.youtube.com/embed/Er49tlp_Mr4'} //?autoplay=1
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" //autoplay;
          allowFullScreen
          className={classes.videoIframe}
        ></iframe>
      </div>
      <SectionHeader
        title={<Typography variant="h3">{t('how-it-works')}</Typography>}
        // subtitle={<Typography variant="h6"></Typography>}
        titleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        fadeUp
      />

      <div className={classes.stepsContainer}>
        <div className={classes.step}>
          <div className={classes.stepPicture}>
            <Image
              src="/images/illustrations/howitworks-1.png"
              alt="wtg"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <Typography color="textPrimary" variant="h6" align="center" className={classes.stepTitle}>
            {t('how-step-1-1')}
          </Typography>
          <Typography color="textPrimary" variant="subtitle1" align="center">
            {t('how-step-1-2')}
          </Typography>
        </div>
        <div className={classes.step}>
          <div className={classes.stepPicture}>
            <Image
              src="/images/illustrations/howitworks-2.png"
              alt="wtg"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>

          <Typography
            color="textPrimary"
            variant="subtitle1"
            align="center"
            className={classes.stepTitle}
          >
            {t('how-step-2-1')}
          </Typography>
          <Typography color="textPrimary" variant="subtitle1" align="center">
            {t('how-step-2-2')}
          </Typography>
        </div>
        <div className={classes.step}>
          <div className={classes.stepPicture}>
            <Image
              src="/images/illustrations/howitworks-3.png"
              alt="wtg"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <Typography
            color="textPrimary"
            variant="subtitle1"
            align="center"
            className={classes.stepTitle}
          >
            {t('how-step-3-1')}
          </Typography>
          <Typography color="textPrimary" variant="subtitle1" align="center">
            {t('how-step-3-2')}
          </Typography>
        </div>
      </div>
      <Typography
        color="textPrimary"
        variant="subtitle1"
        align="center"
        className={classes.stepTitle}
      >
        {t('still-have-question')}
      </Typography>
      <div className={classes.buttonContainers}>
        <Link href={'/faq'}>
          <a>
            <Button variant="outlined">FAQ</Button>
          </a>
        </Link>
        <Link href={'/contact'}>
          <a>
            <Button variant="outlined">{t('contact-us')}</Button>
          </a>
        </Link>
      </div>
    </Section>
  )
}

export default HowItWorks
