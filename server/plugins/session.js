const config = require('../config')

module.exports = {
  plugin: require('yar'),
  options: {
    maxCookieSize: 0,
    cache: {
      cache: 'mongoDbCache',
      expiresIn: 24 * 60 * 60 * 1000,
      segment: 'session'
    },
    cookieOptions: {
      password: config.cookiePassword,
      isSecure: false,
      isHttpOnly: true
    }
  }
}
