import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'
import { Section, SectionAlternate } from 'components/organisms'
import { ContactUsForm, Hero } from './components'
import { SectionHeader } from 'components/molecules'
import { Button } from '@material-ui/core'
import Newsletter from '../../common/Newsletter'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate>
        <ContactUsForm />
      </SectionAlternate>
      {/* <SectionAlternate>
        <Newsletter />
      </SectionAlternate> */}
    </div>
  )
}

export default ContactUs
