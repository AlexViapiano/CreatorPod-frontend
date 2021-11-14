import React from 'react'
import Register from 'views/Register'
import Main from 'layouts/Main'
import Head from 'next/head'

const SignupPage = props => {
  return (
    <div className="container">
      <Head>
        <title>Creator Register</title>
        <meta
          name="description"
          content="The easiest way to find creators ready to work with your brand!"
        ></meta>
        <meta name="keywords" content=""></meta>
      </Head>
      <Main>
        <Register />
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
