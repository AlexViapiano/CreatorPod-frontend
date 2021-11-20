import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { postJob, getJobs } from '../../../../../redux/business/action'
import JobRow from './JobRow'
import {
  useMediaQuery,
  Grid,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Divider,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  divider: {
    marginTop: 25,
    marginBottom: 25,
  },
  jobContainer: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 0,
    paddingBottom: 10,
    borderBottom: '1px solid #eee',
  },
}))

const Jobs = props => {
  const { className, postJob, getJobs, user, jobs, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const [loading, setLoading] = useState(false)
  const [expanded, setExpanded] = React.useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (user?.id && jobs && jobs.length == 0) {
      setLoading(true)
      getJobs(user.business_user).then(() => {
        setLoading(false)
      })
    }
  }, [user])

  const onClickPost = async event => {
    setLoading(true)
    postJob(name, category, description, user.business_user).then(() => {
      getJobs(user.business_user)
      setLoading(false)
      setName('')
      setCategory('')
      setDescription('')
    })
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Typography variant="h5" color="textPrimary">
            Post New Job
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            value={name}
            onChange={() => setName(event.target.value)}
            label={'Name'}
            variant="outlined"
            size="medium"
            name="name"
            fullWidth
            type="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={category}
            onChange={() => setCategory(event.target.value)}
            label={'Category'}
            variant="outlined"
            size="medium"
            name="category"
            fullWidth
            type="category"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={description}
            onChange={() => setDescription(event.target.value)}
            label={'Description'}
            variant="outlined"
            size="medium"
            name="category"
            fullWidth
            type="category"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item container justify="flex-start" xs={12}>
          {loading ? (
            <center>
              <CircularProgress />
            </center>
          ) : (
            <Button
              onClick={() => onClickPost()}
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Post Job
            </Button>
          )}
        </Grid>

        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" color="textPrimary">
            Your Posted Jobs
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          {jobs?.length > 0 ? (
            jobs.map(job => {
              return <JobRow job={job} />
            })
          ) : (
            <Typography variant="subtitle1" color="textPrimary">
              No Jobs Yet
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.session.user,
  business: state.business.business,
  jobs: state.business.jobs,
})

const mapDispatchToProps = dispatch => ({
  postJob: (name, category, description, businessUserId) => {
    return dispatch(postJob(name, category, description, businessUserId))
  },
  getJobs: business_user => {
    return dispatch(getJobs(business_user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
