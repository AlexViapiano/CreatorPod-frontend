const withImages = require('next-images')
module.exports = withImages()

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = phase => {
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd =
    (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_PRODUCTION_SERVER) &&
    process.env.STAGING !== 'true'
  const isStaging =
    (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_PRODUCTION_SERVER) &&
    process.env.STAGING === 'true'

  const env = {
    API_URL: (() => {
      if (isDev) return 'https://www.master-7rqtwti-uakq3f6fmyqti.ca-1.platformsh.site/'
      if (isStaging) return 'https://www.master-7rqtwti-uakq3f6fmyqti.ca-1.platformsh.site/'
      if (isProd) return 'https://www.master-7rqtwti-uakq3f6fmyqti.ca-1.platformsh.site/'
      return 'API_URL:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    APP_URL: (() => {
      if (isDev) return 'https://www.creatorpod.app/'
      if (isStaging) return 'https://www.creatorpod.app/'
      if (isProd) return 'https://www.creatorpod.app/'
      return 'APP_URL:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    STRIPE_KEY: process.env.STRIPE_KEY,
  }
  console.info(
    '----------------------------------------------' +
      `\n` +
      `Phase: ${phase}` +
      `\n` +
      `isDev: ${isDev},  isProd: ${isProd},  isStaging: ${isStaging}` +
      `\n` +
      'API_URL= ' +
      env.API_URL +
      `\n` +
      '----------------------------------------------'
  )

  return {
    env,
    images: {
      domains: ['s3.ca-central-1.amazonaws.com'],
    },
    productionBrowserSourceMaps: true,
    webpack: (config, options) => {
      config.plugins.push(
        new options.webpack.DefinePlugin({
          'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString()),
        })
      )

      return config
    },
  }
}
