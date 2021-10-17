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
        title={<span>Start your creative engines</span>}
        // subtitle="Companies from across the globe have had fantastic experiences using TheFront."
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
            <SearchIcon />

            <DescriptionListIcon
              title={'Download app'}
              subtitle={'Create a profile and check out the brands you want to work with'}
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
            <PostAddIcon />

            <DescriptionListIcon
              title={`Pitch your talent
              `}
              subtitle={'Upload a random product review video and get approved'}
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
              title={'Pick a task'}
              subtitle={
                'From unboxing to showing a product in use, to reviews and more… Choose the task that suits you best'
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
              title={'Get rewards'}
              subtitle={'Enjoy free products and cash rewards in exchange for your videos!'}
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
