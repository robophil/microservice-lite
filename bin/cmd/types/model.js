const fs = require('fs-extra')
const path = require('path')
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

  }).catch(err => console.dir(err))
    ).catch(err => {
      if (err instanceof Error) throw err
      else throw new Error(err)
    })
}
