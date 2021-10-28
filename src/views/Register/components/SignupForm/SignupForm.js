import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button, TextField, InputLabel } from '@material-ui/core'
import validate from 'validate.js'
import { connect } from 'react-redux'
import { joinWaitlist } from '../../../../../redux/session/action'
import Link from 'next/link'
import * as pixels from '../../../../utils/pixels'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  a: {
    color: '#3f51b5',
    fontWeight: 1000,
    cursor: 'pointer',
    marginLeft: 10,
  },
  error: {
    color: theme.palette.error.main,
    fontSize: 20,
    fontWeight: 700,
  },
}))

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  first_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  last_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  phone_number: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
    },
  },
  city: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
    },
  },
  handles: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
    },
  },
}

const SignupForm = ({ joinWaitlist, setSuccess }) => {
  const router = useRouter()
  const classes = useStyles()
  // const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState(null)
  const [video, setVideo] = useState({ preview: '', raw: '' })

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  })

  React.useEffect(() => {
    const errors = validate(formState.values, schema)

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }))
  }, [formState.values])

  const handleChange = event => {
    event.persist()

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (formState.isValid) {
      pixels.completeRegistration()
      joinWaitlist('creators', formState.values, video.raw).then(res => {
        if (!res.error) {
          setSuccess(true)
          //router.push('/')
        } else {
          setError(res)
        }
      })
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }))
  }

  const hasError = field => (formState.touched[field] && formState.errors[field] ? true : false)

  const handleUpload = e => {
    if (e.target.files.length) {
      setVideo({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder={'E-mail'}
              label={'E-mail'}
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder={'First name'}
              label={'First name'}
              variant="outlined"
              size="medium"
              name="first_name"
              fullWidth
              helperText={hasError('first_name') ? formState.errors.first_name[0] : null}
              error={hasError('first_name')}
              onChange={handleChange}
              type="first_name"
              value={formState.values.first_name || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder={'Last Name'}
              label={'Last Name'}
              variant="outlined"
              size="medium"
              name="last_name"
              fullWidth
              helperText={hasError('last_name') ? formState.errors.last_name[0] : null}
              error={hasError('last_name')}
              onChange={handleChange}
              type="last_name"
              value={formState.values.last_name || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder={'Phone #'}
              label={'Phone #'}
              variant="outlined"
              size="medium"
              name="phone_number"
              fullWidth
              helperText={hasError('phone_number') ? formState.errors.phone_number[0] : null}
              error={hasError('phone_number')}
              onChange={handleChange}
              type="phone_number"
              value={formState.values.phone_number || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder={'City'}
              label={'City'}
              variant="outlined"
              size="medium"
              name="city"
              fullWidth
              helperText={hasError('city') ? formState.errors.city[0] : null}
              error={hasError('city')}
              onChange={handleChange}
              type="city"
              value={formState.values.city || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder={'Social Media Handles'}
              label={'Social Media Handles'}
              variant="outlined"
              size="medium"
              name="handles"
              fullWidth
              helperText={hasError('handles') ? formState.errors.handles[0] : null}
              error={hasError('handles')}
              onChange={handleChange}
              type="handles"
              value={formState.values.handles || ''}
              helperText="Ex: TikTok - @Johndoe; Instagram - @Johndoe"
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Video Example</InputLabel>
          </Grid>
          <Grid item xs={12}>
            <div size="large" variant={video?.raw?.name ? null : 'outlined'} type="submit">
              <label htmlFor="upload-button">
                {video?.raw?.name ? video?.raw?.name : 'Upload'}
              </label>
            </div>

            <input
              type="file"
              id="upload-button"
              style={{ display: 'none' }}
              onChange={handleUpload}
            ></input>
          </Grid>

          {error && (
            <Grid align="center" item xs={12}>
              <Typography variant="subtitle2" className={classes.error}>
                {error?.message[0]?.messages[0].message
                  ? error?.message[0]?.messages[0].message
                  : 'An error occured'}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button size="large" variant="contained" type="submit" color="primary" fullWidth>
              Join Waitlist
            </Button>
            <Grid item xs={12}>
              <br />
              <Typography variant="subtitle1" color="textSecondary" align="center">
                Are you a brand?
                <Link href="/signup">
                  <a className={classes.a}>Learn More</a>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  joinWaitlist: (endpoint, creds, video) => {
    return dispatch(joinWaitlist(endpoint, creds, video))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
