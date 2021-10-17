import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, Button, Typography } from '@material-ui/core'
import Image from 'next/image'
import { createCheckoutSession } from '../../../../../redux/session/action'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'linear-gradient(117deg, rgb(255 231 253) 0%, rgb(223 233 255) 35%, rgb(243 255 245) 60%, rgb(252 255 225) 100%)',
    filter: 'drop-shadow(2px 4px 4px #7a7766)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 1000,
    [theme.breakpoints.down('sm')]: {
      height: 750,
    },
    [theme.breakpoints.down('xs')]: {
      height: 650,
    },
  },
  heroSimpleBackground: {
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: `url(/images/shapes/raining_products_lg.svg)`,
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(/images/shapes/raining_products_md.svg)`,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(/images/shapes/raining_products_sm.svg)`,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none', //`url(/images/shapes/raining_products_xs.png)`,
    },
  },
  title: {
    fontWeight: 700,
    fontFamily: 'serif',
    maxWidth: 650,
    padding: 10,
  },
  buttonLarge: {
    padding: '20px 60px',
    borderRadius: 15,
    boxShadow: `rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset`,
    marginTop: 100,
    textTransform: 'none',
    '& h6': {
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 25,
    },
  },
  buttonIcon: {
    marginRight: 10,
  },
  promotionContainer: {
    background: '#FFF',
    border: '1px black dashed',
    borderRadius: 5,
    boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
    padding: 10,
    marginTop: 20,
  },
  freeTrialTitle: {
    fontWeight: 600,
    marginBottom: 0,
  },
  freeTrialCode: {
    fontWeight: 600,
  },
}))

const Hero = props => {
  const { executeScroll, createCheckoutSession, user, stripeCustomer, className, ...rest } = props
  const classes = useStyles()
  const { t } = useTranslation('common')
  const theme = useTheme()
  const router = useRouter()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  })

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Image src="/images/photos/wbox.png" alt="wtg" width={150} height={150} loading="lazy" />
        <Typography color="textPrimary" variant="subtitle1" align="center">
          {t('hero-1')}
        </Typography>
        <Typography color="textPrimary" variant="h1" align="center" className={classes.title}>
          {t('hero-2')}
        </Typography>
        <Button
          onClick={() => executeScroll()}
          className={classes.buttonLarge}
          variant="contained"
          color="primary"
        >
          <Typography variant="h6">{t('subscribe-btn')}</Typography>
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.session?.user,
  stripeCustomer: state.session.stripeCustomer,
})

const mapDispatchToProps = dispatch => ({
  createCheckoutSession: (userId, subscriptionPrice) => {
    return dispatch(createCheckoutSession(userId, subscriptionPrice))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
