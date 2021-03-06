import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, Grid, Button, Divider } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40,
    height: 50,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  ctaContainer: {
    margin: 20,
    '& a': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    [theme.breakpoints.down('sm')]: {
      minHeight: 200,
    },
  },
  sectionNoPaddingBottom: {
    paddingBottom: 0,
  },
}))

const Story = props => {
  const { className, ...rest } = props
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.logoContainer}>
        <Image src="/images/photos/logo.png" alt="Logo" height={50} width={300} />
      </div>
    </div>
  )
}

export default Story
