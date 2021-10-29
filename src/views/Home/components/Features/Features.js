import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, Button, colors } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { CardBase, DescriptionListIcon } from 'components/organisms'
import PostAddIcon from '@material-ui/icons/PostAdd'
import SearchIcon from '@material-ui/icons/Search'
import PersonIcon from '@material-ui/icons/Person'
import PlayIcon from '@material-ui/icons/PlayArrow'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {},
  learnMoreLink: {
    marginTop: theme.spacing(2),
  },
}))

const Features = props => {
  const { data, className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={<span>How does CreatorPod work?</span>}
        //subtitle="Companies from across the globe have had fantastic experiences using TheFront."
        // ctaGroup={[
        //   <Button variant="outlined" size={isMd ? 'large' : 'medium'} color="secondary">
        //     See all integrations
        //   </Button>,
        // ]}
        fadeUp
      />
      <Grid container spacing={2}>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={4}
          md={4}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <Grid container justify="center">
              <Image
                className={classes.image}
                src="/images/photos/how1.png"
                loading="lazy"
                width="140"
                height="100"
              />
            </Grid>

            <DescriptionListIcon
              title={'CREATE POST'}
              subtitle={`Let creators know what your looking for find out who's interested`}
              align="left"
            />
            <div style={{ flexGrow: 1 }} />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={4}
          md={4}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <Grid container justify="center">
              <Image
                className={classes.image}
                src="/images/photos/how2.png"
                loading="lazy"
                width="65"
                height="100"
              />
            </Grid>
            <DescriptionListIcon
              title={`SELECT CREATORS`}
              subtitle={'Review and select a creator to get the job!'}
              align="left"
            />
            <div style={{ flexGrow: 1 }} />
          </CardBase>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          sm={4}
          md={4}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <Grid container justify="center">
              <Image
                className={classes.image}
                src="/images/photos/how3.png"
                loading="lazy"
                width="140"
                height="100"
              />
            </Grid>
            <DescriptionListIcon
              title={'RECEIVE CONTENT'}
              subtitle={'Get fresh UGC video ads delivered to your inbox!'}
              align="left"
            />
            <div style={{ flexGrow: 1 }} />
          </CardBase>
        </Grid>
      </Grid>
    </div>
  )
}

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
}

export default Features
