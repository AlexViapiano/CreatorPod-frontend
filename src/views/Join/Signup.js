import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { SignupForm } from './components'
import Image from 'next/image'
import { SectionHeader } from 'components/molecules'
import { HeroShaped } from 'components/organisms'
import { useMediaQuery } from '@material-ui/core'
import * as pixels from '../../utils/pixels'

const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__cover': {
        height: 200,
      },
      '& .hero-shaped__': {
        height: 200,
      },
      '& .hero-shaped__right-side': {
        height: 200,
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .hero-shaped__cover': {
        height: 200,
      },
      '& .hero-shaped__': {
        height: 200,
      },
      '& .hero-shaped__right-side': {
        height: 200,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 200,
    },
  },
}))

const Signup = props => {
  const classes = useStyles()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  })
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const [eventTriggered, setEventTriggered] = useState(false)

  useEffect(() => {
    if (!eventTriggered) {
      pixels.viewContent({
        content_id: 1,
        content_name: 'BusinessWaitlist',
        // content_type: 'product',
      })
      setEventTriggered(true)
    }
  })

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Join The Waitlist"
              subtitle="The easiest way to find creators ready to work with your brand!"
              titleProps={{
                variant: 'h3',
              }}
            />
            <SignupForm />
          </div>
        }
        rightSide={
          <Image
            className={classes.image}
            src={
              !isSm
                ? '/images/hero/cover-2-mobile.jpg'
                : !isMd
                ? '/images/hero/cover-2-tablet.jpg'
                : '/images/hero/cover-2.jpg'
            }
            alt="Signup"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        }
      />
    </div>
  )
}

export default Signup
