const postfixName = '-service'

module.exports = (name, options) => {
  if (name === undefined) throw new Error(`No name passed\nRun 'mslite help'`)
  if (options.postfix) {
    console.log(`\nNew microservice project created '${name + postfixName}'\n`)
  } else {
    console.log(`\nNew microservice project created '${name}'\n`)
  }
}
