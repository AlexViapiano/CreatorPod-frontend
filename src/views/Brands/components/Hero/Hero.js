import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { colors, FormControl, OutlinedInput, InputAdornment, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Image from 'next/image'
import { SectionHeader } from 'components/molecules'
import { Section } from 'components/organisms'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    position: 'relative',
    background: 'white',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
    background: `linear-gradient(138deg, rgb(249, 255, 245) 1%, rgb(240, 255, 255) 21%, rgb(243, 244, 255) 48%, rgb(251, 245, 255) 76%, rgb(255, 249, 254) 100%)`,
  },
  image: {
    height: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    textShadow: `3px 4px 7px rgb(81 67 21 / 80%)`,
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  searchInputContainer: {
    background: 'white',
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
  },
  input: {
    background: 'white',
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}))

const Hero = props => {
  const { className, searchText, setSearchText, ...rest } = props
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title={'Brands'}
          // subtitle="What brands are you looking for?"
          align="left"
          data-aos="fade-up"
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
        <div className={classes.searchInputContainer} data-aos="fade-up">
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              className={classes.input}
              size="large"
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder={'Brands Placeholder'}
            />
          </FormControl>
          {/* <Button color="primary" variant="contained" size="large" className={classes.searchButton}>
            Search
          </Button> */}
        </div>
      </Section>
    </div>
  )
}

export default Hero
