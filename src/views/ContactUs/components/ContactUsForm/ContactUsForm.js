import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { API_URL } from '../../../../../redux/api'

const useStyles = makeStyles(theme => ({
  root: {},
  form: {
    maxWidth: 550,
    margin: `0 auto`,
    '& .MuiTextField-root': {
      background: 'white',
    },
    '& .MuiOutlinedInput-input': {
      background: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      border: 'solid 1px rgba(0, 0, 0, 0.2)',
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  message: {
    background: theme.palette.primary.main,
    color: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
    width: '100%',
    textAlign: 'center',
  },
  contactContainer: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 20,
  },
}))

const ContactUsForm = props => {
  const { className, ...rest } = props
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [warning, setWarning] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async event => {
    if (name == '' || (email == '' && message == '')) {
      setWarning(true)
      return
    }
    setWarning(false)
    setLoading(true)
    const data = {
      name: name,
      email: email,
      message: message,
    }

    return fetch(`${API_URL}/contact-us`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        setLoading(false)
        if (res.sent) {
          setSent(true)
        } else if (res.error) {
          console.error(res.error)
          setError(true)
        }
        return res
      })
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={'Fill out the form below for any concerns or questions you have!'}
        subtitle=""
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={'center'}
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} data-aos="fade-up">
            <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
              Full Name
            </Typography>
            <TextField
              placeholder={'Full Name'}
              onChange={event => setName(event.target.value)}
              value={name}
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              type="text"
              disabled={sent || loading || error}
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
              E-mail
            </Typography>
            <TextField
              placeholder={'E-mail'}
              onChange={event => setEmail(event.target.value)}
              value={email}
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              disabled={sent || loading || error}
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
              Message
            </Typography>
            <TextField
              placeholder={'Message'}
              onChange={event => setMessage(event.target.value)}
              value={message}
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              disabled={sent || loading || error}
            />
          </Grid>
          <Grid item container justify="center" xs={12}>
            {warning && <p className={classes.message}>Please fill out all inputs</p>}
            {loading ? (
              <center>
                <CircularProgress />
              </center>
            ) : sent ? (
              <>
                <p className={classes.message}>
                  Message sent! One of our customer service reps will reach out!
                </p>
              </>
            ) : error ? (
              <p className={classes.message}>An error occured</p>
            ) : (
              <Button
                onClick={() => handleSubmit()}
                className={classes.btnWhite}
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Send
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
      <div className={classes.contactContainer}>
        <Typography variant="h5">If you still have questions, please consult out FAQ</Typography>
        <Button
          className={classes.input}
          onClick={event => (window.location.href = '/faq')}
          size="large"
          variant="contained"
          color="primary"
        >
          FAQ
        </Button>
      </div>
    </div>
  )
}

export default ContactUsForm
