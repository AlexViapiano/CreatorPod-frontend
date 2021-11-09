import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, colors, Grid, Typography, Button } from '@material-ui/core'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { Image, Icon } from 'components/atoms'
import { SectionHeader } from 'components/molecules'
import { Section } from 'components/organisms'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(184deg, rgb(214 211 255) 0%, rgba(255,255,255,1) 70%)',
  },
  pagePaddingTop: {
    paddingBottom: 0,
  },
  sectionNoPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'linear-gradient(119deg, rgba(126,116,252,1) 0%, rgba(104,104,255,1) 100%)',
    width: 400,
    height: 400,
    borderRadius: 5,
    padding: 20,
    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .5s ease-in-out',
    },
    [theme.breakpoints.down('xs')]: {
      width: 325,
      height: 325,
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  features: {
    textAlign: 'left',
    '& li': {
      color: '#FFF',
    },
  },
  textWhite: {
    color: '#fff',
  },
  btnWhite: {
    background: '#FFF',
  },
}))

const Main = props => {
  const { className, ...rest } = props
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section narrow className={classes.pagePaddingTop}>
        <SectionHeader
          title="Find the Right Creator for you"
          subtitle="Sign up now to browse all of our creators"
          titleProps={{
            className: clsx(classes.fontWeightBold),
            variant: 'h3',
          }}
          data-aos="fade-up"
        />
      </Section>
      <center>
        <div className={classes.container}>
          <Typography className={classes.textWhite} variant="h3" color="textPrimary">
            Pay As You Go
          </Typography>
          <div className={classes.priceContainer}>
            <Typography className={classes.textWhite} variant="h3" color="textPrimary">
              $39.99
            </Typography>
            <Typography className={classes.textWhite} variant="h6" color="textPrimary">
              / month
            </Typography>
          </div>
          <div className={classes.features}>
            <ul>
              <li>
                <Typography className={classes.textWhite} variant="h6" color="textPrimary">
                  High quality
                </Typography>
              </li>
            </ul>
            <ul>
              <li>
                <Typography className={classes.textWhite} variant="h6" color="textPrimary">
                  Premium Editing
                </Typography>
              </li>
            </ul>
            <ul>
              <li>
                <Typography className={classes.textWhite} variant="h6" color="textPrimary">
                  24 to 72 hours delivery
                </Typography>
              </li>
            </ul>
          </div>
          <Link href={'/signup'}>
            <Button className={classes.btnWhite} variant={'contained'} fullWidth size="large">
              Start Now
            </Button>
          </Link>
        </div>
      </center>
    </div>
  )
}

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
}

export default Main
