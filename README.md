# microservice-lite

[![Build Status](https://travis-ci.org/Robophil/microservice-lite.svg?branch=feat%2Fsetup-project-dev-dependencies)](https://travis-ci.org/Robophil/microservice-lite)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Microservice-lite is a very small package for getting started with **microservices** on [node](htts://nodejs.org).
It covers everything a simple microservice should have.

1. Having it's own database (mysql, mongo, postgres, redis, and more)
2. Small footprint
3. Indepenent deployment
4. Zero-configuration
5. Zero-dependency
6. Auto-discovery, fault toleranct and scalable

This works, thanks to the effort of [@dashersw](https://github.com/dashersw/) and his wonderful project [cote.js](https://github.com/dashersw/cote) 
and [@balderdashy](https://github.com/balderdashy) for writing [waterline](https://github.com/balderdashy/waterline)

## install

```bash
# for pre-release do npm i -g microservice-lite@next
npm i -g microservice-lite
```
or
```bash
# for pre-release do yarn global add microservice-lite@next
yarn global add microservice-lite
```

## cli commands

#### create a project
```bash
# creates new project
mslite new sample
```

#### responder
```bash
# New responder has been created as src/app/foo.responder.js
mslite g responder foo [...othernames]
```
#### requester
```bash
# New requester has been created as src/app/foo.requester.js
mslite g requester foo [...othernames]
```
Requesters are global and can be accessed from any location. The above can be accessed as `FooRequester` globally with the app
#### subscriber
```bash
# New subscriber has been created as src/app/foo.subscriber.js
mslite g subscriber foo [...othernames]
```
#### publisher
```bash
# New publisher has been created as src/app/foo.publisher.js
mslite g publisher foo [...othernames]
```
Publishers are global and can be accessed from any location. The above can be accessed as `FooPublisher` globally with the app
#### model
```bash
# New model has been created as src/models/foo.js
mslite g model foo [...othernames]
```
Models are global and can be accessed from any location. The above can be accessed as `Foo` globally with the app

## database and adapters
Each microservice should have it's own database and **mslite** helps you with that. You could have a different database for each service. Eg mysql, mongodb, pouchdb etc.

By default, each project created with **mslite** comes with a disk based databased called `sails-disk`. There are other adapters you can use to have a different database like

- `sails-mysql`
- `sails-postgresql`
- `sails-mongo`
- `sails-redis`
- `sails-orientdb`
- `sails-filemaker`

see [here](http://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters) for more info about adapters.

To add a different adapter for your project, simply install the appropriate adapter and make sure you have the database on your current machine as the adapter would try to make connection.

#### configure adapters
1. Install required adapter eg.
  ```bash
  npm i --save sails-mongo
  ```
2. open `config/adapters.js` and require intalled adapter, also passing it an object name of your pleasing eg
  ```js
  module.exports = {
  'sailsDisk': require('sails-disk'),
  'sailsMongo': require('sails-mongo')
  }
  ```
You can have any amount of adapters saved here for later use
3. Open `config/connections.js` create a connection object. Same as above, pass connection object to a name of your pleasing and specify the adapter from any defined in `step 1`
```js
  module.exports = {
    'diskDb': {
      'adapter': 'sailsDisk'
    },
    myMongodbServer: {
      adapter: 'sailsMongo',//adapter's name, as defined above
      host: 'localhost',
      port: 27017,
      user: 'username', //optional
      password: 'password', //optional
      database: 'your_mongo_db_name_here' //optional
    }
  }
```
4. Open `cofig/models` Tell your models to use the connection you want.
```js
module.exports = {
  'connection': 'myMongodbServer', //change from diskDb
  'migrate': 'alter',
  'schema': true
}
```
## test
NYD

## examples
NYD

## goal

The goal of the project is to make getting started with a microservice easy and painless, giving you basic features. The following features are on the roadmap

- CLI for generating necessary files. eg
```bash
# generates a db model
mslite g model name [names...]
```
- Easy connection to any database with the same api
- .... got a feature in mind ? create an issue [here](https://github.com/Robophil/microservice-lite/issues)

## development

This project uses the following to keep things a bit sane around the house

1. [standardjs](https://standardjs.com/)
2. [validate-commit-msg](https://github.com/conventional-changelog/validate-commit-msg) see http://conventionalcommits.org/
3. [Github flow](https://guides.github.com/introduction/flow/)

and is completly test driven [TDD](https://en.wikipedia.org/wiki/Test-driven_development)