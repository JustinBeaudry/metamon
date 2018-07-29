'use strict';

const Model = require('./lib/Model');
const Collection = require('./lib/Collection');
const Enum = require('./lib/Enum');
const Serializable = require('./lib/Serializable');

module.exports = {
  Model: Model.default,
  Collection: Collection.default,
  Enum: Enum.default,
  Serializable: Serializable.default
}