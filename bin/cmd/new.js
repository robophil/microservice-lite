const fs = require('fs-extra')
const path = require('path')
const replace = require('replace-in-file')
const cwd = process.cwd()

const postfixName = '-service'
const makeProject = (name) => {
  const newDir = []
  newDir.push(fs.ensureDir(`${cwd}/${name}/`))
  newDir.push(fs.ensureFile(`${cwd}/${name}/src/models/.gitkeep`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/requester/.gitkeep`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/responder/.gitkeep`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/publisher/.gitkeep`))
  newDir.push(fs.ensureDir(`${cwd}/${name}/src/app/subscriber/.gitkeep`))

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

    const configSrc = path.resolve(__dirname, '..', '..', 'files/config')
    const configDest = `${cwd}/${name}/config`

    return Promise.all([fs.copy(src, dest), fs.copy(configSrc, configDest)])
  }).then(() => {
    console.log(`\n\tNew Project has been created at '${name}'`)
    const dest = `${cwd}/${name}/package.json`
    return replace({
      files: `${dest}`,
      from: /microservice-lite/g,
      to: `${name}`
    }).then(() => {
      console.log(`\tcd into ${name} and run 'npm install'\n\trun 'mslite help' for assistance and \n\trun 'npm start' to see your project up and running\n`)
    })
  })
}
