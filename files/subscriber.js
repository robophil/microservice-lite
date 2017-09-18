const cote = require('cote')

/**
 * Creates a new Subscriber
 */
const serviceNameSubscriber = new cote.Subscriber({
  name: 'mslite:subscriber:serviceName'
})

module.exports = serviceNameSubscriber
