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
        <title>Creatorpod</title>
        <meta name="description" content=""></meta>
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
