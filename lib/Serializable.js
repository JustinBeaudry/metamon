'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

/**
 * @class Serializable
 */
class Serializable {
  /**
   *
   * converts a class to an object
   *
   * @returns {Object}
   */
  toObject() {
    return Object.assign({}, this);
  }
  /**
   *
   * converts index to an array and stringifies
   *
   * @throws {TypeError}
   * @returns {String}
   */
  toJSON() {
    return (0, _utils.toJSON)(this.toObject());
  }
}

exports.default = Serializable;