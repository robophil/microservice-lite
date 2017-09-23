const fs = require('fs-extra')
const path = require('path')
const replace = require('replace-in-file')
const cwd = process.cwd()

module.exports = (names, type, regex) => {
  const src = path.resolve(__dirname, '..', `files/${type}.js`)
  const dest = (type === 'model') ? `${cwd}/src/models/` : `${cwd}/src/app/`

  return fs.ensureDir(dest).then(() => {
    const copyAction = []
    names.forEach((name) => {
      const filename = (type === 'model') ? `${name}` : `${name}.${type}`
      copyAction.push(fs.copy(src, `${dest}${filename}.js`))
    })
    return copyAction
  }).then(copyAction => Promise.all(copyAction).then(() => {
    const replaceAction = []
    names.forEach(name => {
      const filename = (type === 'model') ? `${name}` : `${name}.${type}`
      replaceAction.push(replace({
        files: `${dest}${filename}.js`,
        from: regex,
        to: `${name[0].toUpperCase()}${name.substr(1)}`
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
