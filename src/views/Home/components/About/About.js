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
      <Grid container justify="center" alignItems="center" spacing={isMd ? 4 : 0}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <Typography color="textPrimary" variant="h2" align="center">
                    Sell More with <br />
                    <TypedText
                      component="span"
                      variant="h2"
                      color="secondary"
                      className={classes.typed}
                      typedProps={{
                        strings: [
                          'Video Ads',
                          'Social Media Posts',
                          'Influencers Posts',
                          'A new company face',
                        ],
                        typeSpeed: 75,
                        backDelay: 1000,
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
                    <Button variant="contained" color="primary" size={isMd ? 'large' : 'medium'}>
                      Find a Creator
                    </Button>
                  </Link>,
                  <Link href="/faq">
                    <Button variant="outlined" color="primary" size={isMd ? 'large' : 'medium'}>
                      Learn More
                    </Button>
                  </Link>,
                ]}
                align={'center'}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12} md={6} data-aos={'fade-up'}>
          <Image src="/images/photos/phone2.png" alt="Dashboard" />
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
