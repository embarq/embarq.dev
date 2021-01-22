const withPreact = require('next-plugin-preact')
const withPWA = require('next-pwa')

module.exports = withPreact(
  withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV !== 'production',
      register: true,
    }
  })
)
