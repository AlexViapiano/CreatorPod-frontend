import React from 'react'
import ForgotPassword from 'views/ForgotPassword'
import Minimal from 'layouts/Minimal'

const ForgotPasswordPage = props => {
  return (
    <div className="container">
      <Minimal>
        <ForgotPassword />
      </Minimal>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default ForgotPasswordPage
