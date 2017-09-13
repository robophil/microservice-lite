#!/usr/bin/env node

const program = require('commander')
const packageJson = require('../package.json')

//require cmd
const newCmd = require('./cmd/new')

// display the version type
program.version(packageJson.version)

program
.command('new [app-name]')
.usage('[app-name]')
.option('-n, --no-postfix', 'no postfix added')
.description('Creates a new micro-service')
.action(newCmd)

// parse the arguments
program.parse(process.argv)
