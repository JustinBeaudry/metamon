import Collection from '../src/Collection';
import Model from '../src/Model';
/**
 *
 * @param {Object} data
 * @param {Object} (defaults)
 * @param {Object} (schema)
 * @param {Object} (views)
 * @returns {{m: Model, err: Error}}
 */
export const model = (data, defaults, schema, views) => {
  let m;
  let err;
  let options;
  if (defaults || schema || views) {
    options = {
      defaults,
      schema,
      views
    }
  }
  try {
    m = new Model(data, options);
  } catch(constructorErr) {
    err = constructorErr;
  }
  return {
    m,
    err,
  }
};
/**
 *
 * @param {Object} data
 * @param {Model} model
 * @param {String} (indexBy)
 * @returns {{c: Collection, err: Error}}
 */
export const collection = (data, model, indexBy) => {
  let c;
  let err;
  try {
    c = new Collection(data, model, indexBy);
  } catch(constructorErr) {
    err = constructorErr;
  }
  return {
    c,
    err
  };
};
