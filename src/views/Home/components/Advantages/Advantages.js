import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, colors } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { CardBase, DescriptionListIcon } from 'components/organisms'
// import PostAddIcon from '@material-ui/icons/PostAdd'
// import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import Image from 'next/image'
// import PlayIcon from '@material-ui/icons/PlayArrow'

const useStyles = makeStyles(theme => ({
  root: {},
  learnMoreLink: {
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  image: {
    boxShadow: `rgb(0 0 0 / 35%) 0px 5px 15px`,
    borderRadius: 30,
    width: 225,
    height: 400,
    margin: 20,
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 10,
    marginRight: 7,
  },
}))

const Advantages = props => {
  const { data, className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={<span>What type of content can our creators provide?</span>}
        //subtitle="Everything... apparel, apps, consumer electronics, cosmetics, food, luxury, etc."
        fadeUp
      />
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid container justify="center" alignItems="center" xs={12} sm={6}>
          <div className={classes.image}>
            <Image src="/images/photos/phone2.png" loading="lazy" width="225" height="400" />
          </div>
        </Grid>
        <Grid container xs={12} sm={6} spacing={2}>
          <div className={classes.container}>
            <div className={classes.icon}>
              <Image src={'/images/icons/checkmark.svg'} loading="lazy" width="40" height="40" />
            </div>
            <DescriptionListIcon
              align="left"
              title={'Product Unboxing'}
              subtitle={
                'Send your product to our creators and they will create an authentic unboxing video to show the world the great products you sell!'
              }
            />
          </div>
          <div className={classes.container}>
            <div className={classes.icon}>
              <Image src={'/images/icons/checkmark.svg'} loading="lazy" width="40" height="40" />
            </div>
            <DescriptionListIcon
              align="left"
              title={'Product Demo'}
              subtitle={
                'Our creators can give amazing videos on why your product/service is a great option and why people should buy it asap!'
              }
            />
          </div>
          <div className={classes.container}>
            <div className={classes.icon}>
              <Image src={'/images/icons/checkmark.svg'} loading="lazy" width="40" height="40" />
            </div>
            <Grid container direction="row" noWrap>
              <DescriptionListIcon
                align="left"
                title={'Testimonial Videos'}
                subtitle={
                  'Get more buzz and hype around your product with testimonials by people who love it!'
                }
              />
            </Grid>
          </div>
          <div className={classes.container}>
            <div className={classes.icon}>
              <Image src={'/images/icons/checkmark.svg'} loading="lazy" width="40" height="40" />
            </div>
            <DescriptionListIcon
              align="left"
              title={'How-To Videos'}
              subtitle={
                'Our creators will demonstrate how great your product by showcasing how great it works and how it can be used!'
              }
            />
          </div>
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
