#!/usr/bin/env node

const program = require('commander')
const packageJson = require('../package.json')

//require cmd
const newCmd = require('./cmd/new')
const generateCmd = require('./cmd/generate')

// display the version type
program.version(packageJson.version)

program
.command('new <app-name>')
.usage('[app-name]')
.option('-n, --no-postfix', 'no postfix added')
.description('Creates a new micro-service')
.action(newCmd)

program
.command('g <type> [names...]')
.usage('[type]')
.description('generates the file type [model],')
.action(generateCmd)

// parse the arguments
program.parse(process.argv)
