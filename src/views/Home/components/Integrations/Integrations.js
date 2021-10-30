import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, Button, Avatar } from '@material-ui/core'
import { Image } from 'components/atoms'
import { SectionHeader } from 'components/molecules'
import { DescriptionListIcon } from 'components/organisms'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 0,
    background: 'transparent',
  },
  subtitleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  subtitle: {
    maxWidth: 650,
  },
  socialContainer: {
    maxWidth: 1000,
  },
}))

const Integrations = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const data = [
    {
      logo: '/images/logos/facebook.png',
      name: 'Facebook',
      title: '',
    },
    {
      logo: '/images/logos/Instagram.png',
      name: 'Instagram',
      title: '',
    },
    {
      logo: '/images/logos/Tiktok.png',
      name: 'TikTok',
      title: '',
    },
    {
      logo: '/images/logos/youtube.png',
      name: 'Youtube',
      title: '',
    },
    {
      logo: '/images/logos/snapchat.png',
      name: 'Snapchat',
      title: '',
    },
    {
      logo: '/images/logos/Amazon.png',
      name: 'Amazon',
      title: '',
    },
  ]

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Boost Sales with UGC"
        subtitle={
          <div className={classes.subtitleContainer}>
            <div className={classes.subtitle}>
              UGC photos and videos are 5x more likely to convert than non-UGC. Boost engagement,
              build social proof and drive more sales for your brand.
            </div>
          </div>
        }
        titleVariant="h3"
        fadeUp
      />
      <Grid className={classes.socialContainer} container spacing={4}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={4}
            sm={4}
            md={2}
            data-aos={'fade-up'}
          >
            <DescriptionListIcon
              icon={
                <Avatar className={classes.avatar}>
                  <Image src={item.logo} alt={item.name} />
                </Avatar>
              }
              title={item.name}
              // subtitle={item.title}
              align="center"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

Integrations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
}

export default Integrations
