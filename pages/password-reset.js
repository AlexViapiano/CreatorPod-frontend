import React from 'react'
import PasswordReset from 'views/PasswordReset'
import Minimal from 'layouts/Minimal'

const PasswordResetPage = props => {
  return (
    <div className="container">
      <Minimal>
        <PasswordReset />
      </Minimal>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  }
}

export default PasswordResetPage
