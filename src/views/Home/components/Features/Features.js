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
        title={<span>How Does It Work?</span>}
        subtitle="Companies from across the globe have had fantastic experiences using TheFront."
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
          sm={6}
          md={3}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <PostAddIcon />
            <DescriptionListIcon
              title={'Create Job Post'}
              subtitle={
                'Create a job Post that so the creator knows your product/service, goals, type of content and advertising style.'
              }
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
          sm={6}
          md={3}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <SearchIcon />
            <DescriptionListIcon
              title={`Find Out Who's Interested`}
              subtitle={
                'Our creators will view your posting and let you know if they are interested to work with you! Find a creator you want to work with? Invite them to view your posting.'
              }
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
          sm={6}
          md={3}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <PersonIcon />
            <DescriptionListIcon
              title={'Pick Creators'}
              subtitle={
                'Go over the pool of creators profiles and pick which ones you want to work with based on their past work and fees.'
              }
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
          sm={6}
          md={3}
          data-aos="fade-up"
        >
          <CardBase liftUp variant="outlined" align="left">
            <PlayIcon />
            <DescriptionListIcon
              title={'Get Videos'}
              subtitle={
                'Once chosen our creators will have your videos created within 72 hours! Want to request some last minute changes? Let the creator know and they’ll be happy to do so.'
              }
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
