'use strict'

import Collection from '../src/Collection';
import Model from '../src/Model';

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
