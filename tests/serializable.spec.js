import test from 'ava';
import Serializable from '../src/Serializable';

test.beforeEach(t => {
  let s;
  let err;
  try {
    s = new Serializable();
  } catch(constructorErr) {
    err = constructorErr;
  }
  Object.assign(s, {
    field1: 'field1',
    field2: 'field2'
  });
  t.context = {
    s,
    err
  }
});

test('toObject() should return a POJO representation of the instance.', t => {
  const {s, err} = t.context;
  t.falsy(err);
  t.truthy(s.field1);
  t.truthy(s.field2);
  t.true(s instanceof Serializable);
  t.false(s.toObject() instanceof Serializable);
});
test('toJSON() should return a JSON representation of the instance', t => {
  const {s, err} = t.context;
  t.falsy(err);
  t.truthy(s.field1);
  t.truthy(s.field2);
  t.true(s instanceof Serializable);
  t.true(typeof s.toJSON() === 'string');
});
test('toJSON() should throw an Error if toObject returns unserializable data', t => {
  const {s, err} = t.context;
  t.falsy(err);
  s.field1 = s;
  t.throws(() => s.toJSON());
});