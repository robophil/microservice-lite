const fs = require('fs-extra')
const path = require('path')
const cwd = process.cwd()

const postfixName = '-service'
const makeProject = (name) => {
  const newDir = []
  newDir.push(fs.ensureDir(`${cwd}/${name}/`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/models/`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/requester/`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/responder/`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/publisher/`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/subscriber/`))

  return Promise.all(newDir)
}

module.exports = (name, options) => {
  if (name === undefined) throw new Error(`No name passed\nRun 'mslite help'`)
  if (options.postfix) {
    name += postfixName
  }
  makeProject(name).then(() => {
    const src = path.resolve(__dirname, '..', '..', 'files/action')
    const dest = `${cwd}/${name}`

    return fs.copy(src, dest)
  }).then(() => {
    console.log('made new projject')
  })
}
