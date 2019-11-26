'use strict'

const path = require('path')

const PROD_PATTERN = /^prod/i

module.exports = (env, argv) => {
  const isProd = PROD_PATTERN.test(process.env.NODE_ENV) || PROD_PATTERN.test(argv.mode)
  const config = {
    mode: isProd ? 'production' : 'development',
    output: {
      path: path.join(__dirname, 'dist')
    },
    target: 'web'
  }

  return [
    {
      ...config,
      entry: {
        thumbor: 'thumbor'
      }
    },
    {
      ...config,
      entry: {
        browser: '.'
      }
    }
  ]
}
