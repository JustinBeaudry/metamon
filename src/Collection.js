import _ from 'lodash';
import Serializable from './Serializable';
import Model from './Model';
import {MissingIndexError} from './errors';
import {toJSON, getType} from './utils';
/**
 *
 * @extends Serializable
 */
class Collection extends Serializable {
  /**
   *
   * Collection is a dictionary helper class. A Collection requires a model to maintain consistency
   * and has methods that allow the addition, removal, and getting access to Models.
   *
   * @summary
   * A Collection is an index of Models. It is a helper object designed around maintaining this index with consistency.
   *
   * @example
   * class PokemonCollection extends Collection {
   *   constructor(data) {
   *     super(data, Person, 'name');
   *   }
   * }
   *
   * const name = 'Ditto';
   * const quote = 'Ditto!';
   * const pokemonCollection = new PokemonCollection({
   *   name,
   *   quote,
   * });
   *
   * assert(pokemonCollection.get(name).quote, quote) // true
   *
   * @param {Object|Array} data - data to create a collection with on construction. data can be passed after instantiation
   * @param {Model} model - the Model to be used when adding data to a collection. A Collection will force all data into this Model.
   * @param {String} (indexBy) [id] - the field that the collection should index on
   * @throws {Error}
   */
  constructor(data, model, indexBy='id') {
    super();
    if (!model || !(model.prototype instanceof Model)) {
      throw new Error('A Collection requires a Model, and the Model must inherit from the Model Base Class.');
    }
    this.index = {};
    this.indexBy = indexBy;
    this.Model = model;
    if (data) {
      this.set(data);
    }
  }
  /**
   *
   * @example
   * assert(pokemonCollection.count === 1); // true
   *
   * @summary
   * returns the number of items in the Collection
   *
   * @returns {Number}
   */
  get count() {
    return Object.keys(this.index).length;
  }
  /**
   *
   * A method that clears the index and sets the collection index again from an array of models or just a model.
   *
   * @example
   * pokemonCollection.set({
   *   name: 'Pikachu'
   * });
   *
   * assert(pokemonCollection.count === 1); // true
   *
   * @param {Object|Array} data
   * @returns {Collection}
   * @throws {TypeError}
   */
  set(data) {
    this.clear();
    switch (getType(data)) {
      case 'array':
        _.each(data, datum => setFromObject.call(this, datum));
        break;
      case 'object':
        setFromObject.call(this, data);
        break;
      default:
        throw new TypeError(`Expected data to be of type {Object|Array} and got ${typeof data}`);
    }
    return this;
  }
  /**
   *
   * A method that adds a model to the index. This method will throw if the same index key already exists
   *
   * @example
   * pokemonCollection.add({
   *    name: 'Ditto'
   * });
   *
   * assert(pokemonCollection.count === 2); // true
   *
   * @param {Object|Model} model
   * @returns {Collection}
   * @throws {Error}
   */
  add(model) {
    let convertedModel = convertToModel.call(this, model);
    const key = convertedModel[this.indexBy];
    if (this.index[key]) {
      throw new Error('Model already exists in Collection index. Call update if you wish to update model');
    }
    this.index[key] = convertedModel;
    return this;
  }
  /**
   *
   * Remove a model by it's index key (the property that has been set to ne indexed in the models constructor)
   *
   * @example
   * pokemonCollection.remove('Mewtwo');
   *
   * assert(pokemonCollection.count === 1); //true
   * assert(pokemonCollection.get('Mewtwo') === null); // true
   *
   * @param {String} modelId
   * @returns {Collection}
   */
  remove(modelId) {
    let model = this.get(modelId);
    if (!model) {
      throw new Error('Model does not exist in Collection index. Call add().');
    }
    let convertedModel = convertToModel.call(this, model);
    const key = convertedModel[this.indexBy];
    delete this.index[key];
    return this;
  }
  /**
   *
   * Updates a model in the index by it's index key (in the example case 'name') and overwrites all field data
   *
   * @example
   * const quote = 'Ditto!';
   * pokemonCollection.update({
   *   name: 'Ditto',
   *   quote
   * });
   *
   * assert(pokemonCollection.quote === quote); // true
   *
   * @param {Object|Model} model
   * @returns {Collection}
   * @throws {Error}
   */
  update(model) {
    let convertedModel = convertToModel.call(this, model);
    const key = convertedModel[this.indexBy];
    if (!this.index[key]) {
      throw new Error('Model to update does not exist in Collection index');
    }
    this.index[key] = convertedModel;
    return this;
  }
  /**
   *
   * Get a model by it's index key or get the entire collection (by passing no params).
   * By not passing an id the call is synonymous with calling the .toArray() on an instance.
   *
   * @example
   * const ditto = pokemonCollection.get('Ditto');
   * assert(ditto === pokemonCollection.index['Ditto']); // true
   *
   * @param {String} (id)
   * @returns {Object|Model|Array<Object|Model>}
   */
  get(id) {
    if (id) {
      return this.index[id];
    }
    return this.toArray();
  }
  /**
   *
   * if id is passed in returns true if the specific model exists otherwise returns true if the collection has > 0 models
   *
   * @param {String} (id)
   * @returns {Boolean}
   */
  contains(id) {
    let result = this.get(id);
    if (id) {
      return !!result;
    }
    return result.length > 0;
  }
  /**
   *
   * clears all items in the index
   *
   * @returns {Collection}
   */
  clear() {
    this.index = {};
    return this;
  }
  /**
   *
   * returns the index as an array
   *
   * @returns {Array<Object>}
   *
   */
  toArray() {
    return _.chain(this.index)
      .values()
      .map(item => convertToModel.call(this, item).toObject())
      .value();
  }
  /**
   *
   * converts index to an array and stringifies
   *
   * @returns {String}
   */
  toJSON() {
    return toJSON(this.toArray());
  }
}
/**
 *
 * @ignore
 * @param {Object} datum
 */
function setFromObject(datum) {
  const model = convertToModel.call(this, datum);
  const key = model[this.indexBy];
  if (!key) {
    throw new MissingIndexError(model, this.indexBy);
  }
  this.index[key] = model;
}
/**
 *
 * @ignore
 * @param {Object|Model} model
 * @returns {Model}
 */
function convertToModel(model) {
  if (!(model instanceof this.Model)) {
    model = new this.Model(model);
  }
  return model;
}
export default Collection;
