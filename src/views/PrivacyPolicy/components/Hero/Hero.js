import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { colors, FormControl, OutlinedInput, InputAdornment, Button } from '@material-ui/core'
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
    filter: `drop-shadow(1px 2px 2px #eeeeee)`,
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
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

const Hero = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title={'Privacy Policy'}
          // subtitle="What do you need?"
          align="left"
          data-aos="fade-up"
          titleProps={{
            className: clsx(classes.title),
            variant: 'h3',
          }}
        />
      </Section>
    </div>
  )
}

export default Hero
