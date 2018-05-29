Metamon
======

[![npm version](https://badge.fury.io/js/metamon.svg)](https://badge.fury.io/js/metamon) [![Build Status](https://travis-ci.org/JustinBeaudry/metamon.svg?branch=master)](https://travis-ci.org/JustinBeaudry/metamon) [![Coverage Status](https://coveralls.io/repos/github/JustinBeaudry/metamon/badge.svg?branch=master)](https://coveralls.io/github/JustinBeaudry/metamon?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8573b69add63f7c41c66/maintainability)](https://codeclimate.com/github/JustinBeaudry/metamon/maintainability)

Share Data Representations (Models, Collections) between Node and the Browser

Read the [DOCS](https://justinbeaudry.github.io/metamon/)

## Why?

Metamon is a toolkit for consistency with the representations of your data between Browsers and Node Servers. It provides methods for creating these
representations and for indexing these representations.

## Installation

Metamon is available via `npm` for Node, and `bower` for the Browser

### Node
```shell
npm i -S metamon
```

### Browser
Metamon has 3 bundles for your convenience:

#### Minified
```javascript
const {Model, Collection, Enum} = require('metamon/dist/metamon.min.js');
```

#### Un-minified
```javascript
const {Model, Collection, Enum} = require('metamon/dist/metamon.js');
```

#### CommonJS
```javascript
const {Model, Collection, Enum} = require('metamon/dist/metamon.cjs.js');
```

You can install metamon via bower with:
```shell
bower install metamon
```

## Usage

Read the [DOCS](https://justinbeaudry.github.io/metamon/)

### Using in Redux

Classes as state really don't play too well with redux. SEE: [Why Not to Store Objects In Redux](https://medium.com/collaborne-engineering/why-not-to-store-objects-in-redux-7f41243020fc) 

### In ReactRedux/Vuex
```javascript
  // inside a reducer
  switch(action.type) {
    case 'LOAD_USERS': {
      return new PersonCollection(action.users, User).toArray(); 
    }
    default: {
      return state
    }
  }
``` 
