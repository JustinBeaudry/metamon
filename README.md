Metamon
======

[![npm version](https://badge.fury.io/js/metamon.svg)](https://badge.fury.io/js/metamon) [![Build Status](https://travis-ci.org/JustinBeaudry/metamon.svg?branch=master)](https://travis-ci.org/JustinBeaudry/metamon) [![Coverage Status](https://coveralls.io/repos/github/JustinBeaudry/metamon/badge.svg?branch=master)](https://coveralls.io/github/JustinBeaudry/metamon?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8573b69add63f7c41c66/maintainability)](https://codeclimate.com/github/JustinBeaudry/metamon/maintainability) 

![Ditto](https://media.giphy.com/media/uQZTgSuGZMTHG/giphy.gif)

Share Data Representations (Models, Collections) Node and the Browser

Read the [DOCS](https://justinbeaudry.github.io/metamon/)

## Why?

Metamon is a toolkit for consistency with the representations of your data between Node applications and Browsers. 
It provides methods for creating, indexing, manipulating, and maintaining consistency with the representations. 

## Installation

Metamon is available via `npm` for Node, for the Browser via CDN, and `bower`

#### jsDelivr CDN
##### Minified
```html
<script src="https://cdn.jsdelivr.net/npm/metamon@2.0.0/dist/metamon.cjs.js" integrity="sha256-i1uYcaeoV21xNqcjFyXpSaaHRc5o7unpCi+lPHmntA4=" crossorigin="anonymous"></script>
```
##### Un-Minified
```html
<script src="https://cdn.jsdelivr.net/npm/metamon@2.0.0/dist/metamon.js" integrity="sha256-W0RVLgpssC2x6SaACzqDiIa1Xo1L6L1vVmawPO9+2lE=" crossorigin="anonymous"></script>
```
##### CommonJS
```html
<script src="https://cdn.jsdelivr.net/npm/metamon@2.0.0/dist/metamon.min.js" integrity="sha256-yrlSk0MzJQD8GU0I0MYXnPUxrJ5Jxs6FvvYLLvpfht8=" crossorigin="anonymous"></script>
```

### Node
```shell
npm i -S metamon
```

### Browser

You can install metamon via bower with:
```shell
bower install metamon
```

### Using in Redux

Using ES6 Classes as state really don't play well with Redux. SEE: [Why Not to Store Objects In Redux](https://medium.com/collaborne-engineering/why-not-to-store-objects-in-redux-7f41243020fc)

```javascript
  import {Model} from 'metamon/index.es6.js';
  class PersonCollection extends Model {}
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
