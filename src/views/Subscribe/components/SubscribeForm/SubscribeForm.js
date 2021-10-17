import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import CheckoutSubscribe from './CheckoutSubscribe'
import SignupSubscribe from './SignupSubscribe'
import LoginSubscribe from './LoginSubscribe'
import { CircularProgress } from '@material-ui/core'
import { Section } from 'components/organisms'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 0,
  },
  container: {
    maxWidth: 1000,
    backgroundColor: '#FFF',
    borderRadius: 25,
    boxShadow: `0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)`,
    border: '10px solid #ffedd9',
    padding: 30,
    [theme.breakpoints.down('sm')]: {
      padding: '30px 10px',
      border: '5px solid #ffedd9',
      borderRadius: 15,
    },
  },
}))

const SubscribeForm = props => {
  const { user, price } = props
  const classes = useStyles()
  const { t } = useTranslation('subscribe')
  const theme = useTheme()
  const [displaySignup, setDisplaySignup] = useState(true)

  var isLoggedIn = user && Object.keys(user).length !== 0

  return (
    <Section className={classes.root}>
      <div className={classes.container}>
        {!isLoggedIn && displaySignup ? (
          <SignupSubscribe setDisplaySignup={setDisplaySignup} />
        ) : !isLoggedIn ? (
          <LoginSubscribe setDisplaySignup={setDisplaySignup} />
        ) : isLoggedIn ? (
          <CheckoutSubscribe price={price} />
        ) : (
          <CircularProgress />
        )}
      </div>
    </Section>
  )
}

const mapStateToProps = state => ({
  user: state.session.user,
})

export default connect(mapStateToProps, null)(SubscribeForm)
