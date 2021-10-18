import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery, colors, Typography, GridList, GridListTile } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  displayLineBreak: {
    whiteSpace: 'pre-line',
  },
}))

const Content = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <div className={classes.section}>
        <Typography component="p" variant="h3" color="textPrimary" align="left">
          Terms And Conditions
        </Typography>
      </div> */}

      <div className={classes.section}>
        <Typography component="p" variant="h5" color="textPrimary" align="left">
          ...
        </Typography>
      </div>
    </div>
  )
}

export default Content
