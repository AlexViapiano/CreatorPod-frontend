import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, colors } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { CardBase, DescriptionListIcon } from 'components/organisms'

const useStyles = makeStyles(theme => ({
  root: {},
  learnMoreLink: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}))

const Advantages = props => {
  const { data, className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  })

  const advantages = [
    {
      title: 'Build Recurring Revenue',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'fas fa-money-bill-wave',
    },
    {
      title: 'Competitive Differentation',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icon: 'fas fa-trophy',
    },
    {
      title: 'Keep Your Clients Loyal',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      icon: 'fas fa-heart',
    },
    {
      title: 'Automated Sales Process',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: 'fas fa-cog',
    },
  ]

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={<span>What type of content can our creators promote?</span>}
        subtitle="Everything... apparel, apps, consumer electronics, cosmetics, food, luxury, etc."
        fadeUp
      />
      <Grid container spacing={isLg ? 10 : 2}>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              title={'Product Unboxing'}
              subtitle={
                'Send your product to our creators and they will create an authentic Unboxing video to show the world the great products you sell!'
              }
            />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              title={'Product Recommendations'}
              subtitle={
                'Our creators can give amazing videos on why your product/service is a great option and why people should buy it asap!'
              }
            />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              title={'Short Skits'}
              subtitle={
                'Some of our creators love to get creative and make a short comedy script relating to your Prodcut!.'
              }
            />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              title={'Software Walkthrough'}
              subtitle={
                'Sell more technical products such as SaaS services? Our creators can perform very quick walkthroughs on the highlights of your software for the world to see!'
              }
            />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              title={'Mobile Games'}
              subtitle={
                'Everyone loves to play games and our Creators are no different. Our creators can walkthrough your mobile game showing everyone how much fun they are having!'
              }
            />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={6}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined">
            <DescriptionListIcon
              title={'Product Unboxing'}
              subtitle={
                'Send your product to our creators and they will create an authentic Unboxing video to show the world the great products you sell!'
              }
            />
          </CardBase>
        </Grid>
      </Grid>
    </div>
  )
}

Advantages.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
}

export default Advantages
