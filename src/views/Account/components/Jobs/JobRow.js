import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { deleteJob, getUserJobs } from '../../../../../redux/session/action'
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Divider,
  IconButton,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  expand: {
    padding: 0,
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  titleIconContainer: {
    display: 'flex',
  },
  jobContainer: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 0,
    paddingBottom: 10,
    borderBottom: '1px solid #eee',
  },
  detailsContainer: {
    margin: 5,
    padding: 5,
  },
}))

const JobRow = props => {
  const { className, deleteJob, user, job, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const [expanded, setExpanded] = React.useState(false)
  const [loading, setLoading] = useState(false)

  const onClickDeleteJob = async jobId => {
    setLoading(true)
    deleteJob(jobId).then(() => {
      setLoading(false)
    })
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const creatorsString = job.creators.map(creator => `${creator.firstname} ${creator.lastname}`)

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        className={classes.jobContainer}
        container
        justify="space-between"
        alignItems="center"
        xs={12}
      >
        <div className={classes.titleIconContainer}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Typography variant="h5" color="textPrimary">
            {job.name}
          </Typography>
        </div>

        <Button
          onClick={() => onClickDeleteJob(job.id)}
          variant="contained"
          type="submit"
          size="large"
        >
          Delete
        </Button>
      </Grid>
      {expanded && (
        <Grid
          className={classes.detailsContainer}
          container
          justify="space-between"
          alignItems="flex-start"
          direction="column"
          xs={12}
        >
          <Typography variant="h5" color="textPrimary">
            Category: {job.category}
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Description: {job.description}
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Interested Creators: {creatorsString}
          </Typography>
        </Grid>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.session.user,
})
const mapDispatchToProps = dispatch => ({
  deleteJob: jobId => {
    return dispatch(deleteJob(jobId))
  },
  getUserJobs: business_user => {
    return dispatch(getUserJobs(business_user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(JobRow)
