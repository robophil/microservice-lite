const postfixName = '-service'

module.exports = (name, options) => {
  if (options.postfix) {
    console.log(`\nNew microservice project created '${name + postfixName}'\n`)
  } else {
    console.log(`\nNew microservice project created '${name}'\n`)
  }
}
