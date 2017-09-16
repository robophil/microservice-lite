module.exports = (cmd, names, options) => {
  switch (cmd) {
    case 'model':
      require('./types/model')(names, options)
      break

    default:
      break
  }
}
