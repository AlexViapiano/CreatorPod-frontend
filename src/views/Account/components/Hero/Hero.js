import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { SectionHeader } from 'components/molecules'
import { Section } from 'components/organisms'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.primary.main,
    background: `linear-gradient(90deg, rgba(113,104,255,1) 0%, rgba(184,180,255,1) 100%)`,
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}))

const Hero = props => {
  const { company, className, ...rest } = props
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title={company}
          subtitle={''}
          align="left"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
    </div>
  )
}

export default Hero
