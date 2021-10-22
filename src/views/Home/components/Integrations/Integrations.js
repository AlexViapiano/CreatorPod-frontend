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
  root: {},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 0,
    background: 'transparent',
  },
}))

const Integrations = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const data = [
    {
      logo: '/images/logos/instagram.png',
      name: 'Instagram',
      title:
        "Sync your team's work and activity to share automatically in a channel with a simple plugin.",
    },
    {
      logo: '/images/logos/facebook.png',
      name: 'Facebook',
      title:
        'Communicate important messages to your users through TheFront using Mailchimp as the delivery service.',
    },
    {
      logo: '/images/logos/Tiktok.png',
      name: 'Tik Tok',
      title:
        'Sync any file store to Dropbox for automated sharing with people outside the company.',
    },
    {
      logo: '/images/logos/amazon.png',
      name: 'Twitter',
      title:
        'Sync any file store to Google Drive for automated sharing with people outside the company.',
    },
    {
      logo: '/images/logos/youtube.png',
      name: 'Youtube',
      title:
        'Easily manage and edit any Adwords campaign inline to improve ROI with constant review.',
    },
    {
      logo: '/images/logos/snapchat.png',
      name: 'Snap Chat',
      title:
        'Keep your entire team in sync with development and easily manage tasks, goals, and deadlines.',
    },
  ]

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Boot Sales with UGC"
        subtitle="UGC photos and videos are 5x more likely to convert than non-UGC. Boost engagement, build social proof and drive more sales for your brand."
        fadeUp
      />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={4}
            sm={2}
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
