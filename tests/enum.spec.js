import test from 'ava';
import Enum from '../src/Enum';

test.before(t => {
  t.context = {
    ACTION1: 'ACTION1',
    ACTION2: 'ACTION2',
    ACTION3: 'ACTION3'
  };
});

test('should be constructable from a String', t => {
  const {ACTION1} = t.context;
  let e;
  let err;
  try {
    e = new Enum(ACTION1);
  } catch(constructorError) {
    err = constructorError;
  }
  t.falsy(err);
  t.is(e[ACTION1], ACTION1);
});

test('should be constructable from a comma-delimited String', t => {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  let e;
  let err;
  try {
    e = new Enum(`${ACTION1},${ACTION2},${ACTION3}`);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  hasAllActions(e, t);
});

test('should be constructable from comma-delimited String with whitespace', t => {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  let e;
  let err;
  try {
    e = new Enum(`${ACTION1}, ${ACTION2}, ${ACTION3}`);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  hasAllActions(e, t);
});

test('should be constructable from an Object', t => {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  let e;
  let err;
  try {
    e = new Enum({
      [ACTION1]: ACTION1,
      [ACTION2]: ACTION2,
      [ACTION3]: ACTION3
    });
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  hasAllActions(e, t);
});

test('should be constructable from an Array of Strings', t => {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  let e;
  let err;
  try {
    e = new Enum([ACTION1, ACTION2, ACTION3]);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  hasAllActions(e, t);
});

test('should be constructable from an Array of Objects', t => {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  let e;
  let err;
  try {
    e = new Enum([
      {
        [ACTION1]: ACTION1
      },
      {
        [ACTION2]: ACTION2
      },
      {
        [ACTION3]: ACTION3
      }
    ]);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  hasAllActions(e, t);
});
test('should be constructable from an Array of Arrays', t => {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  let e;
  let err;
  try {
    e = new Enum([
      [{
        [ACTION1]: ACTION1
      }],
      [{
        [ACTION2]: ACTION2
      }],
      [{
        [ACTION3]: ACTION3
      }]
    ]);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  hasAllActions(e, t);
});

test('should throw an error for an Array of Functions', t => {
  t.throws(() => new Enum([() => {}]));
});

test('should throw an error for an Array of Promises', t => {
  t.throws(() => new Enum([new Promise(() => {})]));
});

test('should throw an error for an Array of Symbols', t => {
  t.throws(() => new Enum([Symbol()]));
})

test('should throw an error if a function is passed', t => {
  t.throws(() => new Enum(() => {}));
});

test('should throw an error if a Promise is passed', t => {
  t.throws(() => new Enum(new Promise(() => {})));
});

test('should throw an error if a Symbol is passed' , t => {
  t.throws(() => new Enum(Symbol()));
});

test('should throw error if any null or undefined data types are passed', t => {
  t.throws(() => new Enum(null))
  t.throws(() => new Enum(undefined));
});

test('once constructed properties should be immutable', t => {
  const {ACTION1, ACTION2} = t.context;
  let e;
  let err;
  try {
    e = new Enum(ACTION1);
  } catch(constructorErr) {
    err = constructorErr;
  }
  t.falsy(err);
  t.is(e[ACTION1], ACTION1);
  t.throws(() => {
    e[ACTION1] = ACTION2;
  });
});

function hasAllActions(e, t) {
  const {ACTION1, ACTION2, ACTION3} = t.context;
  t.is(e[ACTION1], ACTION1);
  t.is(e[ACTION2], ACTION2);
  t.is(e[ACTION3], ACTION3);
}