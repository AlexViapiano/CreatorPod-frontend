import React from 'react'
import Signup from 'views/Signup'
import Minimal from 'layouts/Minimal'

const SignupPage = props => {
  return (
    <div className="container">
      <Minimal>
        <Signup />
      </Minimal>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default SignupPage
