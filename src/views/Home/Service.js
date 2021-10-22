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
  '@global': {
    '@keyframes gradient': {
      '0%': {
        backgroundPosition: `0% 50%`,
      },
      '50%': {
        backgroundPosition: `100% 50%`,
      },
      '100%': {
        backgroundPosition: `0% 50%`,
      },
    },
  },
  background: {
    //backgroundImage: `linear-gradient(117deg, rgb(255 231 253) 0%, rgb(223 233 255) 35%, rgb(243 255 245) 60%, rgb(252 255 225) 100%)`,
    background: `linear-gradient(90deg, rgba(255,228,228,1) 0%, rgba(198,220,255,1) 15%, rgba(235,255,220,1) 33%, rgba(255,252,227,1) 51%, rgba(254,233,255,1) 68%, rgba(215,217,255,1) 85%, rgba(255,228,228,1) 100%)`,
    backgroundSize: `400% 400%`,
    animation: `gradient 15s ease infinite`,
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
        <Integrations />
        <Section>
          <Divider />
        </Section>
        <Features data={customizations} />
        <Section>
          <Divider />
        </Section>
        <Advantages data={advantages} />
        <Section>
          <Divider />
        </Section>
        <VideoSection />
      </Section>
    </div>
  )
}

export default Service
