import {toJSON} from './utils';

export default class Serializable {
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
    return toJSON(this.toObject());
  }
}
