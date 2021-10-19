import React from 'react'
import Signup from 'views/Signup'
import Main from 'layouts/Main'

const SignupPage = props => {
  return (
    <div className="container">
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
