import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, colors } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { CardBase, DescriptionListIcon } from 'components/organisms'
import Image from 'next/image'
// import PostAddIcon from '@material-ui/icons/PostAdd'
// import SearchIcon from '@material-ui/icons/Search'
// import PersonIcon from '@material-ui/icons/Person'
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
        subtitle="Everything... apparel, apps, consumer electronics, cosmetics, food, luxury, etc."
        fadeUp
      />
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid container justify="center" alignItems="center" xs={12} sm={6}>
          <div className={classes.image}>
            <Image src="/images/photos/phone2.png" loading="lazy" width="225" height="400" />
          </div>
        </Grid>
        <Grid container xs={12} sm={6} spacing={2}>
          <Grid item container alignItems="center" direction="column" xs={12} data-aos="fade-up">
            <DescriptionListIcon
              align="left"
              // icon={<PostAddIcon />}
              title={'Unboxing'}
              subtitle={
                'Send your product to our creators and they will create an authentic Unboxing video to show the world the great products you sell!'
              }
            />
          </Grid>
          <Grid item container alignItems="center" direction="column" xs={12} data-aos="fade-up">
            <DescriptionListIcon
              align="left"
              // icon={<SearchIcon />}
              title={'Product Demo'}
              subtitle={
                'Our creators can give amazing videos on why your product/service is a great option and why people should buy it asap!'
              }
            />
          </Grid>
          <Grid item container alignItems="center" direction="column" xs={12} data-aos="fade-up">
            <Grid container direction="row" noWrap>
              <DescriptionListIcon
                align="left"
                // icon={<PlayIcon />}
                title={'Product Reviews'}
                subtitle={
                  'Sell more technical products such as SaaS services? Our creators can perform very quick walkthroughs on the highlights of your software for the world to see!'
                }
              />
            </Grid>
          </Grid>
          <Grid item container alignItems="center" direction="column" xs={12} data-aos="fade-up">
            <DescriptionListIcon
              align="left"
              // icon={<PersonIcon />}
              title={'Testimonials'}
              subtitle={'BLAH BLAH BLAH BLAH BLAH'}
            />
          </Grid>
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
