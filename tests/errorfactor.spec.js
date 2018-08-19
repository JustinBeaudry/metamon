import test from 'ava';
import faker from 'faker';
import ErrorFactory from '../src/ErrorFactory';

test.beforeEach(t => {
  const text = faker.random.word();
  const ErrorConstructor = ErrorFactory();
  const Error = new ErrorConstructor(text);
  t.context = {
    ErrorConstructor,
    Error,
    text
  };
});

test('ErrorFactory() should return an Error Constructor', t => {
  t.is(typeof ErrorFactory, 'function');
  t.is(typeof t.context.ErrorConstructor, 'function');
  t.is(typeof t.context.Error, 'object');
  t.is(t.context.Error.message, t.context.text);
});