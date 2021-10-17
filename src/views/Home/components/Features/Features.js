import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Grid, Button, colors } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { CardBase, DescriptionListIcon } from 'components/organisms'

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
        title={
          <span>
            A Website Builder Tool that <span className="text-highlighted">Works for You</span>
          </span>
        }
        subtitle="Companies from across the globe have had fantastic experiences using TheFront."
        ctaGroup={[
          <Button variant="outlined" size={isMd ? 'large' : 'medium'} color="secondary">
            See all integrations
          </Button>,
        ]}
        fadeUp
      />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={index}
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
              <DescriptionListIcon title={item.title} subtitle={item.description} align="left" />
              <div style={{ flexGrow: 1 }} />
            </CardBase>
          </Grid>
        ))}
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
