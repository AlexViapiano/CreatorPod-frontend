import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar,
} from '@material-ui/core'
import { updateBusiness } from '../../../../../redux/business/action'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    marginTop: -100,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  avatar: {
    cursor: 'pointer',
    width: 150,
    height: 150,
    border: '2px solid #fbfbfb',
    position: 'absolute',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .2s ease-in-out',
    },
    [theme.breakpoints.down('sm')]: {
      width: 100,
      height: 100,
    },
  },
  button: {
    marginRight: 5,
  },
}))

const General = props => {
  const { className, user, business, updateUser, updateBusiness, uploadPicture, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [website, setWebsite] = useState('')

  useEffect(() => {
    setFirstName(business?.firstname)
    setLastName(business?.lastname)
    setCompanyName(business?.name)
    setPhoneNumber(business?.phoneNumber)
    setCompanyEmail(business?.email)
    setWebsite(business?.website)
  }, [user])

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }

  const handleSubmit = async event => {
    setLoading(true)

    // if (image?.raw) {
    //   var res = await uploadPicture(image.raw)
    // }
    // const uploadedPicture = res?.data[0]
    // if (uploadedPicture?.id) data.profile_pic = uploadedPicture.id

    if (business && business.id && user.id) {
      var data = {
        first_name: firstName,
        last_name: lastName,
        name: companyName,
        phoneNumber: phoneNumber,
        email: companyEmail,
        website: website,
      }

      updateBusiness(business.id, data, user.id).then(res => {
        setLoading(false)
      })
    }
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {/* <Grid item xs={12}>
          <label htmlFor="upload-button">
            <div className={classes.avatarContainer}>
              <Avatar
                className={classes.avatar}
                alt={user?.username ? user.username : 'profile-pic'}
                src={
                  image.preview
                    ? image.preview
                    : user?.profile_pic?.formats?.thumbnail?.url
                    ? user?.profile_pic?.formats?.thumbnail?.url
                    : null
                }
              />
            </div>
          </label>

          <input
            type="file"
            id="upload-button"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Typography variant="h5" color="textPrimary">
            Basic Info
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={user?.username}
            label={'Username'}
            variant="outlined"
            size="medium"
            name="username"
            fullWidth
            type="username"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={user?.email}
            label={'Email'}
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
            label={'First Name'}
            variant="outlined"
            size="medium"
            name="first_name"
            fullWidth
            type="first_name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={lastName}
            onChange={event => setLastName(event.target.value)}
            label={'Last Name'}
            variant="outlined"
            size="medium"
            name="last_name"
            fullWidth
            type="last_name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={companyName}
            onChange={() => setCompanyName(event.target.value)}
            label={'Company Name'}
            variant="outlined"
            size="medium"
            name="companyName"
            fullWidth
            type="companyName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={phoneNumber}
            onChange={() => setPhoneNumber(event.target.value)}
            label={'Phone Number'}
            variant="outlined"
            size="medium"
            name="phoneNumber"
            fullWidth
            type="phoneNumber"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={() => setCompanyEmail(event.target.value)}
            value={companyEmail}
            label={'Company Email'}
            variant="outlined"
            size="medium"
            name="companyEmail"
            fullWidth
            type="companyEmail"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={website}
            onChange={() => setWebsite(event.target.value)}
            label={'Website'}
            variant="outlined"
            size="medium"
            name="website"
            fullWidth
            type="website"
          />
        </Grid>

        <Grid item container justify="flex-start" xs={12}>
          {loading ? (
            <center>
              <CircularProgress />
            </center>
          ) : (
            <Button
              onClick={() => handleSubmit()}
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Save
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.session.user,
  business: state.business.business,
})

const mapDispatchToProps = dispatch => ({
  updateBusiness: (businessId, data, userId) => {
    return dispatch(updateBusiness(businessId, data, userId))
  },
  uploadPicture: image => {
    return dispatch(uploadPicture(image))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(General)
