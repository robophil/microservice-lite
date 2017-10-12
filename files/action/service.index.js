const path = require('path')

// require publishers and make them global
const publishers = require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'recursive': false,
  'filter': function (fileName) {
    let parts = fileName.split('.publisher')
    if (parts[1] === '.js') return `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)}Publisher`
  }
})
Object.keys(publishers).forEach(publisher => {
  global[publisher] = publishers[publisher]
})

// require requesters and make them global
const requesters = require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'recursive': false,
  'filter': function (fileName) {
    let parts = fileName.split('.requester')
    if (parts[1] === '.js') return `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)}Requester`
  }
})

Object.keys(requesters).forEach(requester => {
  global[requester] = requesters[requester]
})

// require all responders
require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'filter': /(.+responder)\.js$/,
  'recursive': false
})
// require all subscribers
require('require-all')({
  'dirname': path.resolve(__dirname) + '/src/app',
  'filter': /(.+subscriber)\.js$/,
  'recursive': false
})
