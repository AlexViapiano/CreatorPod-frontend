import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, colors, Grid, Typography, Button } from '@material-ui/core'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { Image, Icon } from 'components/atoms'
import { SectionHeader } from 'components/molecules'
import { Section, CardPricingStandard } from 'components/organisms'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {},
  pagePaddingTop: {
    // paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      // paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(1),
    },
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: 'relative',
    '& h3, h6': {
      color: '#FFF',
    },
    '& .MuiTypography-root': {
      color: '#FFF',
    },
    '& button': {
      background: '#FFF',
    },
    '& li': {
      padding: 0,
    },
    '& hr': {
      display: 'none',
    },
  },
  shapeContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    background: theme.palette.primary.main,
    height: 171,
  },
  shapeImage: {
    objectFit: 'cover',
  },
  sectionNoPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  cardPricing: {
    background: theme.palette.primary.main,
    '& .countup-number__count-wrapper': {
      textAlign: 'left',
      marginBottom: 0,
      fontWeight: 'bold',
    },
    borderRadius: '20px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}))

const Main = props => {
  const { data, className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const [pricingOption, setPricingOption] = React.useState('monthly')

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption)
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section narrow className={classes.pagePaddingTop}>
        <SectionHeader
          title="Find the Right Creator for you"
          subtitle="Sign up now to browse all of our creators"
          titleProps={{
            className: clsx(classes.fontWeightBold),
            variant: 'h3',
          }}
          data-aos="fade-up"
        />
      </Section>
      <div className={classes.pricingContainer}>
        <div className={classes.pricingWrapper}>
          <Section className={classes.sectionNoPadding}>
            <Grid container justify="center" spacing={isMd ? 4 : 2}>
              {data.map((item, index) => (
                <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
                  <CardPricingStandard
                    variant="outlined"
                    withShadow={item.isHighlighted ? true : false}
                    title={item.title}
                    liftUp
                    subtitle={item.subtitle}
                    priceComponent={
                      <div className={classes.priceContainer}>
                        <Typography variant="h3" color="textPrimary">
                          ${pricingOption === 'annual' ? item.annual : item.monthly}
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                          / month
                        </Typography>
                      </div>
                    }
                    features={item.features}
                    featureCheckComponent={
                      <Icon
                        fontIconClass="far fa-check-circle"
                        fontIconColor={colors.indigo[500]}
                      />
                    }
                    cta={
                      <Link href={'/signup'}>
                        <Button
                          // color="primary"
                          variant={item.isHighlighted ? 'contained' : 'outlined'}
                          fullWidth
                          size="large"
                        >
                          Start Now
                        </Button>
                      </Link>
                    }
                    disclaimer={item.disclaimer}
                    className={classes.cardPricing}
                  />
                </Grid>
              ))}
            </Grid>
          </Section>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
}

export default Main
