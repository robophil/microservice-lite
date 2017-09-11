# microservice-lite

[![Build Status](https://travis-ci.org/Robophil/microservice-lite.svg?branch=feat%2Fsetup-project-dev-dependencies)](https://travis-ci.org/Robophil/microservice-lite)

Microservice-lite is a very small package for getting started with **microservices** on [node](node.js).
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

## note

This is still in *alpha* and not production ready, don't hesitate to give it a try and make feature request and bug fixes.

## goal

The goal of the project is to make getting started with a microservice easy and painless, giving you basic features. The following features are on the roadmap

- CLI for generating necessary files. eg
```bash
# creates new project
ms-lite create sample-project
```
```bash
# creates converter-requester.js
ms-lite new requester converter
```
```bash
# creates file-converter-responder.js
ms-lite new responder file-converter
```
- Easy connection to any database with the same api
- .... got a feature in mind ? create an issue [here](https://github.com/Robophil/microservice-lite/issues)

## development

This project uses the following to keep things a bit sane around the house

1. [standardjs](https://standardjs.com/)
2. [validate-commit-msg](https://github.com/conventional-changelog/validate-commit-msg) see http://conventionalcommits.org/
3. [Github flow](https://guides.github.com/introduction/flow/)

and is completly test driven [TDD](https://en.wikipedia.org/wiki/Test-driven_development)