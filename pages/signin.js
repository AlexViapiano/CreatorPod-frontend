import React from 'react'
import Signin from 'views/Signin'
import Main from 'layouts/Main'

const SigninPage = props => {
  return (
    <div className="container">
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
