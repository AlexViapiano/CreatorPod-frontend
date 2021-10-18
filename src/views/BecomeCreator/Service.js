import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core'
import ForumIcon from '@material-ui/icons/Forum'
import { Section } from 'components/organisms'
import {
  About,
  Advantages,
  Features,
  Integrations,
  Reviews,
  Team,
  VideoSection,
} from './components'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import { partners, advantages, reviews, integrations, customizations, team } from './data'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
  background: {
    backgroundImage: `linear-gradient(117deg, rgb(255 231 253) 0%, rgb(223 233 255) 35%, rgb(243 255 245) 60%, rgb(252 255 225) 100%)`,
  },
}))

const Service = () => {
  const classes = useStyles()
  const [focusForm, setFocusForm] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [description, setDescription] = useState('')
  const [tellUsMore, setTellUsMore] = useState('')

  const handleSubmit = async event => {
    setLoading(true)
    const data = {
      companyName: name,
      phoneNumber: phoneNumber,
      email: email,
      website: website,
      description: description,
      tellUsMore: tellUsMore,
    }

    return fetch(`${API_URL}/become-supplier`, {
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
    <div className={classes.root}>
      <div className={classes.background}>
        <Section>
          <About data={partners} />
        </Section>
      </div>
      <Section>
        {/* <Integrations />
        <Section>
          <Divider />
        </Section> */}
        <Features data={customizations} />
        {/* <Section>
          <Divider />
        </Section>
        <Advantages data={advantages} />
        <Section>
          <Divider />
        </Section>
        <VideoSection /> */}
      </Section>
      <Dialog open={focusForm} onClose={() => setFocusForm(false)}>
        <DialogContent className={classes.dialogContactForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.textWhite}>
                Tell Us About Yourself!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                Name
              </Typography>
              <TextField
                value={name ? name : ''}
                onChange={event => setName(event.target.value)}
                placeholder={'Name'}
                variant="outlined"
                size="medium"
                name="name"
                fullWidth
                type="text"
                disabled={loading || sent}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                Phone Number
              </Typography>
              <TextField
                value={phoneNumber ? phoneNumber : ''}
                onChange={event => setPhoneNumber(event.target.value)}
                placeholder={'Phone Number'}
                variant="outlined"
                size="medium"
                name="phoneNumber"
                fullWidth
                type="text"
                disabled={loading || sent}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                E-mail
              </Typography>
              <TextField
                value={email ? email : ''}
                onChange={event => setEmail(event.target.value)}
                placeholder={'Email'}
                variant="outlined"
                size="medium"
                name="email"
                fullWidth
                type="text"
                disabled={loading || sent}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                Website
              </Typography>
              <TextField
                value={website ? website : ''}
                onChange={event => setWebsite(event.target.value)}
                placeholder={''}
                variant="outlined"
                size="medium"
                name="website"
                fullWidth
                type="text"
                disabled={loading || sent}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                Description
              </Typography>
              <TextField
                value={description ? description : ''}
                onChange={event => setDescription(event.target.value)}
                placeholder="Description"
                variant="outlined"
                size="medium"
                name="description"
                fullWidth
                type="text"
                multiline
                rows={4}
                disabled={loading || sent}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                Tell Us More
              </Typography>
              <TextField
                value={tellUsMore ? tellUsMore : ''}
                onChange={event => setTellUsMore(event.target.value)}
                placeholder="Tell Us More"
                variant="outlined"
                size="medium"
                name="tellUsMore"
                fullWidth
                type="text"
                multiline
                rows={4}
                disabled={loading || sent}
              />
            </Grid>
            <Grid item container justify="flex-start" xs={12}>
              {loading ? (
                <center>
                  <CircularProgress />
                </center>
              ) : sent ? (
                <>
                  <p className={classes.message}>Confirmed </p>
                  <p>
                    <Button
                      onClick={() => setFocusForm(false)}
                      className={classes.btnWhite}
                      variant="contained"
                      type="submit"
                      size="large"
                    >
                      Close
                    </Button>
                  </p>
                </>
              ) : error ? (
                <p className={classes.message}>Error</p>
              ) : (
                <Button
                  onClick={() => handleSubmit()}
                  className={classes.btnWhite}
                  variant="contained"
                  type="submit"
                  size="large"
                >
                  Send
                </Button>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Service
