import React from 'react'
import Home from 'views/Home'
import Main from 'layouts/Main'
import { API_URL } from '../redux/api'
import Head from 'next/head'
import { FacebookMessenger } from '../src/common/FacebookMessenger'

const HomePage = props => {
  return (
    <div className="home-container">
      <Head>
        <title>CreatorPod</title>
        <meta
          name="description"
          content="The easiest way to find creators ready to work with your brand!"
        ></meta>
        <meta name="keywords" content=""></meta>
      </Head>
      <Main>
        <Home />
      </Main>
      <FacebookMessenger />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default HomePage
