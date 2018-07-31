import test from 'ava';
import Collection from '../src/Collection';
import Model from '../src/Model';
import {collection} from './mock.utils';

class TestModel extends Model {}

test.beforeEach(t => {
  t.context.field1 = 'field1';
  t.context.field2 = 'field2';
  t.context.field3 = 'field3';
});

test('should throw an error if no model is supplied', t => {
  t.throws(() => new Collection());
});
test('should throw an MissingIndexError if an Object TestModel is missing the indexed field', t => {
  t.throws(() => new Collection({}, TestModel, 'name'));
});
test('should throw an MissingIndexError if an Array of Models is missing the indexed field', t => {
  t.throws(() => new Collection([{}], TestModel, 'name'));
});
test('should be constructable from TestModel', t => {
  const {field1} = t.context;
  let c;
  let err;
  try {
    c = new Collection(new TestModel({
      id: field1,
      field1
    }), TestModel);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  t.true(c instanceof Collection);
  t.true(c.toArray().length === 1);
  t.truthy(c.index[field1]);
});
test('should be constructable from Object', t => {
  let c = bootstrap(t);
  const {field1} = t.context;
  t.truthy(c.index[field1]);
});
test('should be constructable from Array', t => {
  const {field1, field2} = t.context;
  let {c, err} = collection([
    {
      id: field1,
      field1
    },
    {
      id: field2,
      field2
    }
  ], TestModel);
  t.falsy(err);
  t.true(c instanceof Collection);
  t.true(c.toArray().length === 2);
  t.truthy(c.index[field1]);
  t.truthy(c.index[field2]);
});
test('set() should not be called when constructing without data', t => {
  let {c, err} = collection(null, TestModel);
  t.falsy(err);
  t.true(c instanceof Collection);
  t.true(c.toArray().length === 0);
});

test('set() should set with an Object', t => {
  let c = bootstrap(t);
  const {field1, field2} = t.context;
  t.is(c.index[field1].field1, field1);
  c.set({
    id: field2,
    field2
  });
  t.true(c.toArray().length === 1);
  t.falsy(c.index[field1]);
  t.truthy(c.index[field2]);
});
test('set() should set with an Array', t => {
  let c = bootstrap(t);
  const {field1, field2, field3} = t.context;
  t.is(c.index[field1].field1, field1);
  c.set([
    {
      id: field2,
      field2
    },
    {
      id: field3,
      field3
    }
  ]);
  t.true(c.toArray().length === 2);
  t.falsy(c.index[field1]);
  t.truthy(c.index[field2]);
  t.truthy(c.index[field3]);
  t.is(c.index[field2].field2, field2);
  t.is(c.index[field3].field3, field3);
});
test('set() should throw if not Object or Array', t => {
  let c = bootstrap(t);
  const {field1} = t.context;
  t.is(c.index[field1].field1, field1);
  t.throws(() => c.set(null));
  t.throws(() => c.set(undefined));
  t.throws(() => c.set(() => {}));
  t.throws(() => c.set(new Promise(() => {})));
  t.throws(() => c.set(Symbol));
  t.throws(() => c.set(100));
});
test('set() should clear the index when called', t => {
  let c = bootstrap(t);
  const {field1, field2} = t.context;
  t.is(c.index[field1].field1, field1);
  c.set({
    id: field2,
    field2
  });
  t.falsy(c.index[field1]);
  t.true(c.toArray().length === 1);
  t.is(c.index[field2].field2, field2);
});

test('add() should add a model to the collection index', t => {
  let c = bootstrap(t);
  const {field1, field2} = t.context;
  t.is(c.index[field1].field1, field1);
  c.add({
    id: field2,
    field2
  });
  t.true(c.toArray().length === 2);
  t.is(c.index[field1].field1, field1);
  t.is(c.index[field2].field2, field2);
});
test('add() should throw if model already exists in collection', t => {
  let c = bootstrap(t);
  const {field1} = t.context;
  t.is(c.index[field1].field1, field1);
  t.throws(() => c.add({
    id: field1,
    field1
  }));
});
test('remove() should remove a model from the collection index', t => {
  const {field1} = t.context;
  let c = bootstrap(t);
  t.is(c.index[field1].field1, field1);
  t.truthy(c.index[field1]);
  c.remove(field1);
  t.falsy(c.index[field1]);
});
test('remove() should throw if model does not exist in collection', t => {
  const {field1, field2} = t.context;
  let c = bootstrap(t);
  t.is(c.index[field1].field1, field1);
  t.throws(() => c.remove({
    field2
  }))
});

test('update() should update model if it exists', t => {
  let c = bootstrap(t);
  const {field1, field2} = t.context;
  t.is(c.index[field1].field1, field1);
  c.update({
    id: field1,
    field2
  });
  t.true(c.toArray().length === 1);
  t.not(c.index[field1].field2, field1);
  t.is(c.index[field1].field2, field2);
});
test('update() should throw if key does not exist', t => {
  const {field1, field2} = t.context;
  let c = bootstrap(t);
  t.true(c.toArray().length === 1);
  t.is(c.index[field1].field1, field1);
  t.throws(() => c.update({
    id: field2,
    field2
  }));
});

test('get() should return a specific model if id is valid and contained in the index', t => {
  let c = bootstrap(t);
  const {field1} = t.context;
  t.true(c.get(field1) instanceof TestModel);
});
test('get() should return undefined if no model exists for the given id', t => {
  let c = bootstrap(t);
  const {field2} = t.context;
  t.is(c.get(field2), undefined);
});
test('get() should return an array if id is not defined', t => {
  let c = bootstrap(t);
  t.true(Array.isArray(c.get()));
});

test('contains() should return true if model exists for given id', t => {
  let c = bootstrap(t);
  const {field1} = t.context;
  t.true(c.contains(field1));
});
test('contains() should return false if model does not exist for given id', t => {
  let c = bootstrap(t);
  const {field2} = t.context;
  t.false(c.contains(field2));
});
test('contains() should return true if no id is passed and the collection has more than 0 models in the collection', t => {
  let c = bootstrap(t);
  t.true(c.contains());
});
test('contains() should return false if no id is passed and the collection has 0 models', t => {
  let c = bootstrap(t);
  c.index = {};
  t.false(c.contains());
});

test('clear() should remove all items in the index', t => {
  let c = bootstrap(t);
  t.is(Object.keys(c.index).length, 1);
  c.clear();
  t.is(Object.keys(c.index).length, 0);
});

test('count should return the number of items in the collection', t => {
  let {field2, field3} = t.context;
  let c = bootstrap(t);
  t.is(c.count, 1);
  c.add({
    id: field2,
    field2
  });
  t.is(c.count, 2);
  c.add({
    id: field3,
    field3
  });
  t.is(c.count, 3);
  c.index = {};
  t.is(c.count, 0);
});

test('toArray() should convert object index into an array of models', t => {
  let c = bootstrap(t);
  t.true(Array.isArray(c.toArray()));
  t.true(c.toArray().length === Object.values(c.index).length);
});

test('toJSON() should convert to an array and then into valid JSON', t => {
  let c = bootstrap(t);
  t.true(typeof c.toJSON() === 'string');
});
test('toJSON() should throw if array is not convertible to JSON', t => {
  let c = bootstrap(t);
  c.index = c;
  t.throws(() => c.toJSON());
});

function bootstrap(t) {
  const {field1} = t.context;
  let {c, err} = collection({
    id: field1,
    field1
  }, TestModel);
  t.falsy(err);
  t.true(c.toArray().length === 1);
  return c;
}
