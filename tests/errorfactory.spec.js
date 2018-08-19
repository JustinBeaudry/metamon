import test from 'ava';
import sinon from 'sinon';
import faker from 'faker';
import ErrorFactory from '../src/ErrorFactory';

const captureSpy = sinon.spy();

class CaptureStackError extends Error {
  constructor() {
    super();
  }
  static captureStackTrace() {
    return captureSpy();
  }
}

class NoCaptureStackError {}

test('ErrorFactory() should return an Error Constructor', t => {
  const text = faker.random.word();
  const ErrorConstructor = ErrorFactory();
  const CustomError = new ErrorConstructor(text);
  t.is(typeof ErrorFactory, 'function');
  t.is(typeof ErrorConstructor, 'function');
  t.is(typeof CustomError, 'object');
  t.is(CustomError.message, text);
});

test('ErrorFactory() should have a baked error message if passed into its constructor', t => {
  const text = faker.random.word();
  const ErrorConstructor = ErrorFactory(text);
  const CustomError = new ErrorConstructor();
  t.is(typeof ErrorConstructor, 'function');
  t.is(typeof CustomError, 'object');
  t.is(CustomError.message, text);
});

test('ErrorFactory() should call captureStackTrace and capture the constructors stack frames', t => {
  const ErrorConstructor = ErrorFactory(null, CaptureStackError);
  new ErrorConstructor();
  t.true(captureSpy.called);
});

test('ErrorFactory() should not call captureStackTrace if not present on constructor', t => {
  const ErrorConstructor = ErrorFactory(null, NoCaptureStackError);
  t.not(typeof ErrorConstructor.captureStackTrace, 'function');
});