const copy = require('../../../helper/copy')

module.exports = (names, options) => {
  const type = 'model'
  const regex = /serviceName/g
  copy(names, type, regex).then(() => {
    console.log('\n')
    names.forEach(name => {
      console.info(`\tNew ${type} has been created as src/models/${name}.js`)
    })
    console.log('\n')
  }).catch(err => {
    if (err instanceof Error) throw err
    else throw new Error(err)
  })
}
