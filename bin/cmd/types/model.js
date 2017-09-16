const fs = require('fs-extra')
const path = require('path')
const replace = require('replace-in-file')
const cwd = process.cwd()

const dest = `${cwd}/src/models/`
const src = path.resolve(__dirname, '..', '..', '..', 'files/model.js')

module.exports = (names, options) => {
  fs.ensureDir(dest).then(() => {
    const copyAction = []
    names.forEach((name) => {
      copyAction.push(fs.copy(src, `${dest}${name}.js`))
    })
    return copyAction
  }).then(copyAction => Promise.all(copyAction).then(() => {
    const replaceAction = []
    names.forEach(name => {
      replaceAction.push(replace({
        files: `${dest}${name}.js`,
        from: /model_name/g,
        to: name
      }))
    })
    return replaceAction
  }).catch(err => new Error(err))
    .then(replaceAction => Promise.all(replaceAction).then(() => {
    })).catch(err => new Error(err)))
    .catch(err => {
      if (err instanceof Error) throw err
      else throw new Error(err)
    })
}
