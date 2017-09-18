const cote = require('cote')

/**
 * Creates a new Publisher
 */
const serviceNamePublisher = new cote.Publisher({
  name: 'mslite:publisher:serviceName '
})

module.exports = serviceNamePublisher
