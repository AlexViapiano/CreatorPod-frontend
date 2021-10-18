import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Divider, Drawer } from '@material-ui/core'
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

  const [openBottombar, setOpenBottombar] = React.useState(false)

  const handleBottombarOpen = () => {
    setOpenBottombar(true)
  }

  const handleBottombarClose = () => {
    setOpenBottombar(false)
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
          <Grid container spacing={isMd ? 4 : 2}>
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
                value={companyName ? companyName : ''}
                onChange={event => setCompanyName(event.target.value)}
                placeholder={'Name'}
                variant="outlined"
                size="medium"
                name="companyName"
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
                {t('e-mail')}
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
                {t('website')}
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
                {t('company-description')}
              </Typography>
              <TextField
                value={description ? description : ''}
                onChange={event => setDescription(event.target.value)}
                placeholder={t('company-description-placeholder')}
                variant="outlined"
                size="medium"
                name="companyDescription"
                fullWidth
                type="text"
                multiline
                rows={4}
                disabled={loading || sent}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textPrimary" className={classes.inputTitle}>
                {t('tell-us')}
              </Typography>
              <TextField
                value={tellUsMore ? tellUsMore : ''}
                onChange={event => setTellUsMore(event.target.value)}
                placeholder={t('tell-us-placeholder')}
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
                  <p className={classes.message}>
                    {t('confirmation')}
                    <br></br>
                    {t('confirmation-2')}
                  </p>
                  <p>
                    <Button
                      onClick={() => setFocusForm(false)}
                      className={classes.btnWhite}
                      variant="contained"
                      type="submit"
                      size="large"
                    >
                      {t('close')}
                    </Button>
                  </p>
                </>
              ) : error ? (
                <p className={classes.message}>{t('error')}</p>
              ) : (
                <Button
                  onClick={() => handleSubmit()}
                  className={classes.btnWhite}
                  variant="contained"
                  type="submit"
                  size="large"
                >
                  {t('send')}
                </Button>
              )}
            </Grid>
          </Grid>{' '}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Service
