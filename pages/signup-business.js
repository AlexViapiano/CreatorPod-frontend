import React from 'react'
import Signup from 'views/SignupBusiness'
import Main from 'layouts/Main'
import Head from 'next/head'

const SignupPage = props => {
  return (
    <div className="container">
      <Head>
        <title>Business Signup</title>
        <meta
          name="description"
          content="The easiest way to find creators ready to work with your brand!"
        ></meta>
        <meta name="keywords" content=""></meta>
      </Head>
      <Main>
        <Signup />
      </Main>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default SignupPage
