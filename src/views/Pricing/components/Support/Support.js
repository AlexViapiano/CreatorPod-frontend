import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, useMediaQuery, colors, Button } from '@material-ui/core'
import { LearnMoreLink } from 'components/atoms'
import { SectionHeader } from 'components/molecules'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {},
  gridItemBorder: {
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${colors.grey[200]}`,
    },
  },
}))

const Support = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} className={classes.gridItemBorder}>
          <SectionHeader
            title="Start today to get your first UGC’s now!"
            titleVariant="h5"
            subtitle="View message performance and test against variants and control."
            subtitleVariant="body1"
            subtitleColor="textPrimary"
            ctaGroup={[
              <Link href={'/signup'}>
                <Button color="primary" variant={'outlined'} fullWidth size="large">
                  Get Started
                </Button>
              </Link>,
            ]}
            disableGutter
          />
        </Grid>
        {isSm && (
          <Grid item xs={12} sm={6}>
            <SectionHeader
              title="Still have questions?"
              titleVariant="h5"
              subtitle="Click below to send us an email"
              subtitleVariant="body1"
              subtitleColor="textPrimary"
              ctaGroup={[
                <a href={'mailto:hello@creatorpod.app'}>
                  <Button color="primary" variant={'outlined'} fullWidth size="large">
                    Contact Us
                  </Button>
                </a>,
              ]}
              disableGutter
            />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

Support.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
}

export default Support
