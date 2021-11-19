import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { postJob, getUserJobs } from '../../../../../redux/session/action'
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
}))

const Jobs = props => {
  const { className, postJob, getUserJobs, user, userJobs, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (user?.id && userJobs.length == 0) {
      setLoading(true)
      getUserJobs(user.id).then(() => {
        setLoading(false)
      })
    }
  }, [user])

  const onClickPost = async event => {
    setLoading(true)
    postJob(name, category, description).then(() => {
      getUserJobs()
      setLoading(false)
    })
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
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
              Post
            </Button>
          )}
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" color="textPrimary">
            Posted Jobs
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          {userJobs?.length > 0 ? (
            userJobs.map(review => {
              return (
                <Grid item xs={12}>
                  <Typography variant="h5" color="textPrimary">
                    Jobs
                  </Typography>
                  <Button
                    onClick={() => removeReview(review)}
                    className={classes.ratingDeleteBtn}
                    variant="contained"
                    type="submit"
                    size="large"
                  >
                    Delete
                  </Button>
                </Grid>
              )
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
  userJobs: state.session.userJobs,
})

const mapDispatchToProps = dispatch => ({
  postJob: (name, category, description) => {
    return dispatch(postJob(name, category, description))
  },
  getUserJobs: userId => {
    return dispatch(getUserJobs(userId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
