module.exports = (cmd, names, options) => {
  switch (cmd) {
    case 'model':
      require('./types/model')(names, options)
      break
    case 'requester':
      require('./types/requester')(names, options)
      break
    case 'responder':
      require('./types/responder')(names, options)
      break
    case 'publisher':
      require('./types/publisher')(names, options)
      break
    case 'subscriber':
      require('./types/subscriber')(names, options)
      break
    default:
      break
  }
}
