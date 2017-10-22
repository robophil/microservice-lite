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

## Install

```bash
npm i -g microservice-lite
# or
yarn global add microservice-lite
```
## Get started

Create a fresh project with **mslite** by running
```bash
mslite new $projectname
```

## Features

1. [Requester & Responder](#Requester-&-Responder)
1. [Tracking changes with a publish-subscribe mechanism](#Responder)
1. [Model](#Model)
1. [Configure Database and Adapter](#Model)
   1. [Setup Adapter](#Model)
1. [Test](#Model)
1. [Examples](#Model)
1. [Development](#Model)

#### Requester & Responder
> The most common scenario for applications is the **request-response** cycle. Typically, one microservice would request a task to be carried out or make a query to another microservice, and get a response in return.
Read more [here](http://cote.js.org/#implementing-a-request-response-mechanism)

Generate one or more `Requester(s)` by running the command.
```bash
# $name = user
mslite g requester $name [...$othernames]
# New requester has been created at src/app/requester/user.requester.js
```
```javascript
const cote = require('cote')

/**
 * Creates a new Requester
 */
const UserRequester = new cote.Requester({
  name: 'mslite:requester:User '
})

module.exports = UserRequester

```

**NB :** Requesters are global and can be accessed from any location within the app. The above can be accessed as `UserRequester`

Generate one or more `Responder(s)` by running the command.
```bash
# $name = calculate
mslite g responder $name [...$othernames]
# New responder has been created at src/app/responder/calculate.responder.js
```
```javascript
const cote = require('cote')

/**
 * Creates a new Responder
 */
const CalculateResponder = new cote.Responder({
  name: 'mslite:responder:Calculate '
})

module.exports = CalculateResponder

```

####  Tracking changes with a publish-subscribe mechanism
> Another common need in most systems is tracking changes and events as they occur. This gives room for other services to perform some other chores depending on what they subscribed to. Read more [here](http://cote.js.org/#tracking-changes-in-the-system-with-a-publish-subscribe-mechanism)

Generate one or more `Subscriber(s)` by running the command.
```bash
# $name = rss
mslite g subscriber $name [...$othernames]
# New subscriber has been created at src/app/subscriber/rss.subscriber.js
```
```javascript
const cote = require('cote')

/**
 * Creates a new Subscriber
 */
const RssSubscriber = new cote.Subscriber({
  name: 'mslite:subscriber:Rss '
})

module.exports = RssSubscriber

```
Generate one or more `Publisher(s)` by running the command.
```bash
# $name = news
mslite g publisher $name [...$othernames]
# New subscriber has been created at src/app/publisher/news.publisher.js
```
```javascript
const cote = require('cote')

/**
 * Creates a new Publisher
 */
const NewsPublisher = new cote.Subscriber({
  name: 'mslite:publisher:News '
})

module.exports = NewsPublisher

```
**NB :** Publishers are global and can be accessed from any location within the app. The above can be accessed as `NewsPublisher`

#### Model
> As stated above, every service should have it's own database. That's where models come. You could create a model and set the schema if need as you would in **mongoose** or sails' **waterline**. Waterline is the `orm` used in `mslite`, so you could use any database of your choice and have nothing to worry about. 

Generate one or more `Model(s)` by running the command.
```bash
# $name = order
mslite g model $name [...$othernames]
# New model has been created as src/models/order.js
```
**NB :** Models are global and can be accessed from any location. The above can be accessed as `Order` globally with the app

## Configuring database and adapters
By default, each project created with **mslite** comes with a disk based database called `sails-disk` which uses your filesystem. There are other adapters you can use to have a different database like

- `sails-mysql`
- `sails-postgresql`
- `sails-mongo`
- `sails-redis`
- `sails-orientdb`
- `sails-filemaker`

see [here](http://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters) for more info about adapters.

To add a different adapter for your project, simply install the appropriate adapter and make sure you have the database on your current machine as the adapter would try to make connection.

#### Setup adapters
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
    'myMongodbServer': {
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
  'connection': 'myMongodbServer', // change from diskDb
  'migrate': 'alter', // migration option
  'schema': true // only persist data defined in your schema
}
```

## Test
NYD

## Example
> **We'll be building a fictitious ecommerce application as stated [here](http://microservices.io/patterns/microservices.html).**
> We'll need 3 services for this use case.
* [Account-service](https://github.com/Robophil/Account-service)
* [Inventory-service](https://github.com/Robophil/Inventory-service)
* [Shipping-service](https://github.com/Robophil/Shipping-service)

We'll also need a frontend/gateway for this application. And we'll call that [Fictitious-ecommerce-store](https://github.com/Robophil/Fictitious-ecommerce-store).

## Development

This project uses the following to keep things a bit sane around the house

1. [standardjs](https://standardjs.com/)
2. [validate-commit-msg](https://github.com/conventional-changelog/validate-commit-msg) see http://conventionalcommits.org/
3. [Github flow](https://guides.github.com/introduction/flow/)