import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, Button, colors } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import Link from 'next/link'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {},
  video: {
    position: 'relative',
  },
  videoCover: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: colors.indigo[500],
    opacity: '0.3',
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
  },
  videoPlayButton: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: 70,
    zIndex: 1300,
    boxShadow: '0 8px 21px 0 rgba(30,76,165,.2)',
    borderRadius: '100%',
  },
  image: {
    boxShadow: `rgb(0 0 0 / 35%) 0px 5px 15px`,
    borderRadius: 30,
    width: 225,
    height: 400,
  },
}))

const VideoSection = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        spacing={isMd ? 5 : 2}
        direction="row-reverse"
      >
        <Grid item container justify="center" xs={12} sm={6} data-aos={'fade-up'}>
          <div className={classes.image}>
            <Image src="/images/photos/phone1.png" loading="lazy" width="225" height="400" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid container alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title={<span>Time to grow with Video Ads!</span>}
                subtitle="Creators are waiting to create custom-made video ads for you. What are you waiting for?"
                ctaGroup={[
                  <Link href="/signup">
                    <Button variant="outlined" color="primary" size={isMd ? 'large' : 'medium'}>
                      Get Started
                    </Button>
                  </Link>,
                ]}
                align={'center'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

VideoSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default VideoSection
