import test from 'ava';
import faker from 'faker';
import Model from '../src/Model';
import {model} from './mock.utils';

test.before(t => {
  t.context.model = model;
  t.context.field1 = faker.random.word();
  t.context.field2 = faker.random.word();
  t.context.field3 = faker.random.word();
});

test('should be constructable', t => {
  let m;
  let err;
  try {
    m = new Model();
  } catch (constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  t.true(m instanceof Model);
});
test('should be constructable with default defaults', t => {
  const {field1, field2, model} = t.context;
  let {m, err} = model({
    field1,
    field2
  });
  t.falsy(err);
  t.true(typeof m.id === 'string');
  t.true(typeof m.modified === 'number');
  t.true(typeof m.created === 'number');
  t.true(m.field1 === field1);
  t.true(m.field2 === field2);
});
test('should be constructable with custom defaults', t => {
  const _id = '_id';
  const _created = new Date();
  const _modified = new Date();
  const {field1, field2, model} = t.context;
  let {m, err} = model({
    field1,
    field2
  }, {
    _id,
    _created,
    _modified
  });
  t.falsy(err);
  t.true(m.id === undefined);
  t.true(m.created === undefined);
  t.true(m.modified === undefined)
  t.true(m._id === _id);
  t.true(m._created === _created);
  t.true(m._modified === _modified);
});
test('if schema, model should validate the fields', t => {
  const {field1} = t.context;
  const schema = {
    [field1]: {
      type: 'string'
    }
  };
  let {m, err} = model({
    [field1]: field1
  }, null, schema);
  t.falsy(err);
  t.is(m[field1], field1);
});
test('if schema, model should validate and throw if in correct types', t => {
  const {field1, field2} = t.context;
  const schema = {
    [field1]: {
      type: 'string'
    }
  };
  let {err} = model({
    [field2]: field2
  }, null, schema);
  t.truthy(err);
});
test('if view and no blacklist or whitelist constructor should throw', t => {
  const {field1, field2} = t.context;
  let view1 = faker.random.word();
  const {err} = model({
    [field1]: field1,
    [field2]: field2
  }, null, null, {
    [view1]: [field1]
  });
  t.truthy(err);
});
test('if view and both blacklist and whitelist constructor should throw', t => {
  const {field1, field2} = t.context;
  let view1 = faker.random.word();
  const {err} = model({
    [field1]: field1,
    [field2]: field2
  }, null, null, {
    [view1]: {
      whitelist: [field1],
      blacklist: [field1]
    }
  });
  t.truthy(err);
});
test('if view and whitelist view fields, the view should have the exact keys that are in the whitelist', t => {
  const {field1, field2} = t.context;
  let view1 = faker.random.word();
  const {m, err} = model({
    [field1]: field1,
    [field2]: field2
  }, null, null, {
    [view1]: {
      whitelist: [field1]
    }
  });
  t.falsy(err);
  t.is(m.getView(view1)[field1], m[field1]);
});
test('if view and blacklist view fields, the view should not have the keys listed in the blacklist', t => {
  const {field1, field2} = t.context;
  let view1 = faker.random.word();
  const {m, err} = model({
    [field1]: field1,
    [field2]: field2
  }, null, null, {
    [view1]: {
      blacklist: [field1]
    }
  });
  t.falsy(err);
  t.is(m.getView(view1)[field2], m[field2]);
});
test('set() without defaults should not throw', t => {
  let m;
  let err;
  try {
    m = new Model();
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  t.true(m instanceof Model);
});
test('set() should overwrite data to the model', t => {
  const field3 = 'field3';
  const field4 = 'field4';
  const {field1, field2, model} = t.context;
  const {m, err} = model({
    field1,
    field2
  });
  t.falsy(err);
  t.true(m.field1 === field1);
  t.true(m.field2 === field2);
  m.set({
    field3,
    field4
  });
  t.true(m.field3 === field3);
  t.true(m.field4 === field4);
  m.set({
    field1: 'field5',
    field2: 'field6'
  });
  t.true(m.field1 === 'field5');
  t.true(m.field2 === 'field6');
});
test('set() should overwrite defaults when strict', t => {
  const {field1, field2, field3} = t.context;
  const {m, err} = model({
    [field1]: field2,
    [field2]: field3
  }, {
    [field1]: field1,
    [field2]: field2,
    [field3]: field3
  }, {
    [field1]: {
      type: 'string'
    },
    [field2]: {
      type: 'string'
    },
    [field3]: {
      type: 'string'
    }
  });
  t.falsy(err);
  t.is(m[field1], field2)
  t.is(m[field2], field3);
  t.is(m[field3], field3);
  m.set({
    [field3]: field1
  });
  t.is(m[field3], field1);
});
test('addView() should add a whitelist view if none exists', t => {
  const {field1} = t.context;
  const {m, err} = model({
    field1
  }, {
    field1
  });
  t.falsy(err);
  m.addView('view1', [field1], true);
  t.true(getViews(m).view1.fields.indexOf(field1) > -1)
});
test('addView() should throw if the view already exists', t => {
  const {field1} = t.context;
  const {m, err} = model({
    [field1]: field1
  }, {
    [field1]: field1
  });
  t.falsy(err);
  m.addView('view1', [field1]);
  t.is(m.getView('view1')[field1], field1);
  t.throws(() => m.addView('view1', [field1]));
});
test('getView() should return null if the view does not exist', t => {
  const {field1} = t.context;
  const {m, err} = model({
    field1
  }, {
    field1
  });
  t.falsy(err);
  t.is(m.getView('view1'), null);
});
test('getView() should return the the specific fields in the view' , t => {
  const {field1, field2, field3} = t.context;
  const {m, err} = model({
    [field1]: field1,
    [field2]: field2,
    [field3]: field3
  }, {
    [field1]: field1,
    [field2]: field2,
    [field3]: field3
  });
  t.falsy(err);
  m.addView('view1', [field1]);
  t.true(Object.keys(m.getView('view1')).indexOf(field1) > -1);
  m.addView('view2', [field1, field2]);
  const view2 = Object.keys(m.getView('view2'));
  t.true(view2.indexOf(field1) > -1 && view2.indexOf(field2) > -1);
});

function getViews(m) {
  return m[Object.getOwnPropertySymbols(m)[0]];
}