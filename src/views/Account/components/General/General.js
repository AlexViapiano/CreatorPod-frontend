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
  Divider,
  CircularProgress,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
} from '@material-ui/core'
import {
  updateStripeCustomer,
  updateUser,
  uploadPicture,
} from '../../../../../redux/session/action'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: '32px 0px',
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
  errorContainer: {
    color: '#fff',
    background: theme.palette.error.main,
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    fontWeight: 900,
    fontSize: 16,
  },
  select: {
    '& li': {
      minHeight: 30,
    },
  },
  button: {
    marginRight: 5,
  },
}))

const General = props => {
  const {
    className,
    user,
    stripeCustomer,
    country,
    updateStripeCustomer,
    updateUser,
    uploadPicture,
    business,
    ...rest
  } = props
  const classes = useStyles()

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      componentRestrictions: { country: 'ca' },
    },
    debounce: 300,
  })

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [formState, setFormState] = useState({ diets: [] })
  const [shipping_address_line1, setShipping_address_line1] = useState('')
  const [shipping_address_line2, setShipping_address_line2] = useState('')
  const [shipping_city, setShipping_city] = useState('')
  const [shipping_country, setShipping_country] = useState('')
  const [shipping_state, setShipping_state] = useState('')
  const [shipping_zip, setShipping_zip] = useState('')
  const [error, setError] = useState(null)
  const [confirm, setConfirm] = useState(null)

  useEffect(() => {
    if (user != null) {
      var diets = user?.diets
        ? user.diets.map(diet => {
            return diet.id.toString()
          })
        : []
      setFormState({ diets: diets })
    }
    setFirstName(user?.first_name)
    setLastName(user?.last_name)
    setPhoneNumber(user?.phone_number)
    if (stripeCustomer != null) {
      setShipping_address_line1(stripeCustomer?.shipping?.address?.line1)
      setShipping_address_line2(stripeCustomer?.shipping?.address?.line2)
      setShipping_city(stripeCustomer?.shipping?.address?.city)
      setShipping_country(country)
      setShipping_state(stripeCustomer?.shipping?.address?.state)
      setShipping_zip(stripeCustomer?.shipping?.address?.postal_code)
    }
  }, [user, stripeCustomer])

  const handleFieldChange = event => {
    event.persist()
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    }))
  }

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }

  const handleSubmitUser = async event => {
    setLoading(true)

    if (image?.raw) {
      var res = await uploadPicture(image.raw)
    }

    const uploadedPicture = res?.data[0]

    var data = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      diets: formState.diets,
    }

    if (uploadedPicture?.id) data.profile_pic = uploadedPicture.id

    if (user?.id) {
      updateUser(user.id, data).then(res => {
        setLoading(false)
      })
    }
  }
  if (confirm)
    return (
      <div>
        <Typography variant="h5">Verify your address </Typography>
        <Typography variant="subtitle1">
          {confirm.verified_shipping_address_line1 +
            ', ' +
            (confirm.shipping_address_line2 && confirm.shipping_address_line2 + ', ') +
            confirm.verified_shipping_city +
            ', ' +
            confirm.verified_shipping_country +
            ', ' +
            confirm.verified_shipping_state +
            ', ' +
            confirm.verified_shipping_zip}
        </Typography>
        <br />
        <Button
          onClick={handleConfirm}
          variant="contained"
          type="submit"
          color="primary"
          size="large"
        >
          Confirm
        </Button>
        <br /> <br />
        <Button
          variant="outlined"
          size="small"
          onClick={() => setConfirm(false)}
          className={classes.button}
        >
          Back
        </Button>
        <Button variant="outlined" size="small" onClick={handleSkip} className={classes.button}>
          Save unverified address
        </Button>
        <br /> <br />
        <Typography variant="subtitle1">Unverified Address</Typography>
        <Typography variant="subtitle2">
          {shipping_address_line1 +
            ', ' +
            (shipping_address_line2 && shipping_address_line2 + ', ') +
            shipping_city +
            ', ' +
            shipping_country +
            ', ' +
            shipping_state +
            ', ' +
            shipping_zip}
        </Typography>
      </div>
    )

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
            Basic Info
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            value={firstName}
            onChange={() => setFirstName(event.target.value)}
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
            onChange={() => setLastName(event.target.value)}
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

        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary">
            Business Info
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            value={business?.name}
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
            value={business?.phoneNumber}
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
            value={business?.email}
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
            value={business?.website}
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
              onClick={() => handleSubmitUser()}
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
  business: state.session.business,
  stripeCustomer: state.session.stripeCustomer,
  country: state.session.country,
})

const mapDispatchToProps = dispatch => ({
  updateStripeCustomer: (userId, data) => {
    return dispatch(updateStripeCustomer(userId, data))
  },
  updateUser: (userId, data) => {
    return dispatch(updateUser(userId, data))
  },
  uploadPicture: image => {
    return dispatch(uploadPicture(image))
  },
  updateBusiness: (userId, data) => {
    return dispatch(updateBusiness(userId, data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(General)
