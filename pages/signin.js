import React from 'react'
import Signin from 'views/Signin'
import Main from 'layouts/Main'
import Head from 'next/head'

const SigninPage = props => {
  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="The easiest way to find creators ready to work with your brand!"
        ></meta>
        <meta name="keywords" content=""></meta>
      </Head>
      <Main>
        <Signin />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default SigninPage
