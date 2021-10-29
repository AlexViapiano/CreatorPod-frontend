import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, Typography, Button } from '@material-ui/core'
import { Image } from 'components/atoms'
import { SectionHeader, TypedText } from 'components/molecules'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {},
  promoLogo: {
    maxWidth: 100,
  },
  typed: {
    fontWeight: 600,
  },
  image: {
    boxShadow: `rgb(0 0 0 / 35%) 0px 5px 15px`,
    borderRadius: 30,
  },
  cta: {
    width: 250,
    height: 50,
    borderRadius: 50,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.10)',
      transition: 'all .2s ease-in-out',
    },
  },
}))

const About = props => {
  const { data, className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <Typography color="textPrimary" variant="h2" align="center">
                    Sell more with <br />
                    <TypedText
                      component="span"
                      variant="h3"
                      color="secondary"
                      className={classes.typed}
                      typedProps={{
                        strings: [
                          'Video Ads',
                          'Social Media Posts',
                          'Influencers Posts',
                          'A new company face',
                        ],
                        typeSpeed: 100,
                        backDelay: 1500,
                        backSpeed: 0,
                        loop: true,
                      }}
                    />
                  </Typography>
                }
                subtitle="The easiest way to find creators ready to work with your brand!"
                // subtitle="Looking for UGC videos or picture to use as Ads or Post? Look no further! Our network of creators are ready to create custom content for your company!"
                ctaGroup={[
                  <Link href="/signup">
                    <Button
                      className={classes.cta}
                      variant="contained"
                      color="primary"
                      size={'large'}
                    >
                      Find a Creator
                    </Button>
                  </Link>,
                  // <Link href="/faq">
                  //   <Button variant="outlined" color="primary" size={isMd ? 'large' : 'medium'}>
                  //     Learn More
                  //   </Button>
                  // </Link>,
                ]}
                align={'center'}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12} sm={6} data-aos={'fade-up'}>
          <video
            className={classes.image}
            autoPlay
            muted
            loop
            style={{ width: '300px', height: '533px' }}
          >
            <source src="/images/video/home.mp4" />
          </video>
        </Grid>
      </Grid>
    </div>
  )
}

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
}

export default About
