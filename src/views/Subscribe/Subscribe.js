import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Hero, HeroTrial, HowItWorks, SubscribeForm, Pricing } from './components'
import * as pixels from '../../utils/pixels'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {},
  fingerPrintSection: {
    backgroundColor: '#fdf1eb',
    boxShadow: '5px 0px 5px 5px rgb(197 197 197 / 75%)',
    backgroundImage: `linear-gradient(117deg, rgb(255 231 253) 0%, rgb(223 233 255) 35%, rgb(243 255 245) 60%, rgb(252 255 225) 100%)`,
  },
}))

const Subscription = props => {
  const classes = useStyles()
  const myRef = useRef(null)
  const router = useRouter()
  const [price, setPrice] = useState(null)

  useEffect(() => {
    pixels.viewSubscribe({})
  })

  const executeScroll = () => myRef?.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div>
      {router?.route == '/trial' ? (
        <HeroTrial executeScroll={executeScroll} />
      ) : (
        <Hero executeScroll={executeScroll} />
      )}

      <HowItWorks />
      <div ref={myRef} className={classes.fingerPrintSection}>
        <Pricing price={price} setPrice={setPrice} />
        <SubscribeForm price={price} />
      </div>
    </div>
  )
}

export default Subscription
