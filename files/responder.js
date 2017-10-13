const cote = require('cote')

/**
 * Creates a new Responder
 */
const serviceNameResponder = new cote.Responder({
  name: 'mslite:responder:serviceName'
})

module.exports = serviceNameResponder
