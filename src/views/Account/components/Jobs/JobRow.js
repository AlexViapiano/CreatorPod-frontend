import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { deleteJob, getJobs } from '../../../../../redux/business/action'
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
    cursor: 'pointer',
    '&:hover': {
      background: '#f9f9f9',
    },
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
    '& h5': {
      marginLeft: 10,
    },
  },
  jobContainer: {
    marginTop: 5,
    paddingTop: 2,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 10,
    borderBottom: '1px solid #eee',
  },
  detailsContainer: {
    margin: 5,
    padding: 5,
  },
  deleteBtn: {
    background: '#e5534b',
    color: '#FFF',
  },
}))

const JobRow = props => {
  const { className, deleteJob, getJobs, user, job, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const [expanded, setExpanded] = React.useState(false)
  const [loading, setLoading] = useState(false)

  const onClickDeleteJob = async (e, jobId) => {
    e.stopPropagation()
    setLoading(true)
    deleteJob(jobId).then(() => {
      getJobs(user.business_user)
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
        onClick={handleExpandClick}
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
          onClick={e => onClickDeleteJob(e, job.id)}
          variant="contained"
          type="submit"
          size="small"
          className={classes.deleteBtn}
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
          {creatorsString.length > 0 && (
            <Typography variant="h6" color="textPrimary">
              Interested Creators: {creatorsString}
            </Typography>
          )}
          <Typography variant="h6" color="textPrimary">
            Category: {job.category}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Description: {job.description}
          </Typography>
        </Grid>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.session.user,
  jobs: state.business.jobs,
})
const mapDispatchToProps = dispatch => ({
  deleteJob: jobId => {
    return dispatch(deleteJob(jobId))
  },
  getJobs: business_user => {
    return dispatch(getJobs(business_user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(JobRow)
