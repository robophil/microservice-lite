const cote = require('cote')

/**
 * creates a new Requester
 */
const serviceNameRequester = new cote.Requester({
  name: 'mslite:requester:serviceName'
})

module.exports = serviceNameRequester
