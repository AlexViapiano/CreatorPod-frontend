import ServerError from 'views/ServerError'
import Minimal from 'layouts/Minimal'
import NextErrorComponent from 'next/error'

const errorPage = ({ statusCode, hasGetInitialPropsRun, err }) => {
  return (
    <div className="container">
      <Minimal>
        <ServerError />
      </Minimal>
    </div>
  )
}

errorPage.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  })

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  return errorInitialProps
}

export default errorPage
