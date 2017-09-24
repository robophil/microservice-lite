const path = require('path')

// require publishers and make them global
const publishers = require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'filter': /(.+publisher)\.js$/
})
Object.keys(publishers).forEach(publisher => {
  global[publisher] = publishers[publisher]
})

// require requesters and make them global
const requesters = require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'filter': /(.+requester)\.js$/
})
Object.keys(requesters).forEach(requester => {
  global[requester] = requesters[requester]
})

// require all responders
require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'filter': /(.+responder)\.js$/
})
// require all subscribers
require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'filter': /(.+subscriber)\.js$/
})
