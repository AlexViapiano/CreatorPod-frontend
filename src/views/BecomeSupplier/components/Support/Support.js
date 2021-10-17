import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, Grid, Button } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {},
  listItemAvatar: {
    minWidth: 28,
  },
  listItem: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
  galleryMedia: {
    width: 80,
    height: 80,
    marginLeft: theme.spacing(-2),
    border: '3px solid white',
    '&:first-child': {
      marginLeft: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.up('md')]: {
      width: 140,
      height: 140,
    },
  },
}))

const Contact = props => {
  const { data, className, ...rest } = props
  const classes = useStyles()
  const { t } = useTranslation('becomeSupplier')

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const team = [
    {
      authorPhoto: {
        src: '/images/illustrations/people/veronica-adams.jpg',
        srcSet: '/images/illustrations/people/veronica-adams@2x.jpg 2x',
      },
      authorName: 'Veronica Adams',
    },
    {
      authorPhoto: {
        src: '/images/illustrations/people/akachi-luccini.jpg',
        srcSet: '/images/illustrations/people/akachi-luccini@2x.jpg 2x',
      },
      authorName: 'Akachi Luccini',
    },
    {
      authorPhoto: {
        src: '/images/illustrations/people/jack-smith.jpg',
        srcSet: '/images/illustrations/people/jack-smith@2x.jpg 2x',
      },
      authorName: 'Jack Smith',
    },
    {
      authorPhoto: {
        src: '/images/illustrations/people/kate-segelson.jpg',
        srcSet: '/images/illustrations/people/kate-segelson@2x.jpg 2x',
      },
      authorName: 'Kate Segelson',
    },
  ]

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <SectionHeader
            label={t('support-team')}
            title={
              <>
                <span>
                  {t('support-team-title-1')}
                  <span className="text-highlighted"> {t('support-team-title-2')}</span>
                </span>
              </>
            }
            subtitle={t('support-team-subtext')}
            align="center"
            disableGutter
          />
        </Grid>
        <Link href={'/contact'}>
          <a>
            <Button
              className={classes.btnLearnMore}
              variant="outlined"
              color="secondary"
              size="large"
            >
              {t('contact-us')}
            </Button>
          </a>
        </Link>
        ,
        {/* <Grid item container alignItems="center" justify="center" xs={12} data-aos="fade-up">
          {team.map((item, index) => (
            <Avatar
              key={index}
              className={classes.galleryMedia}
              alt={item.authorName}
              {...item.authorPhoto}
            />
          ))}
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Contact
