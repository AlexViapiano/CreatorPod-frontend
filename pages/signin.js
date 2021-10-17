import React from 'react'
import Signin from 'views/Signin'
import Minimal from 'layouts/Minimal'

const SigninPage = props => {
  return (
    <div className="container">
      <Minimal>
        <Signin />
      </Minimal>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default SigninPage
