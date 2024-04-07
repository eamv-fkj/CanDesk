import {startTest, endTest, unitTest, assert} from '../common/testing';

import '../common/extensions';


startTest();

/*
 * class Image extensions
 */

// no tests (yet)!

/*
 * class Array extensions
 */
unitTest('Array.hasTypes(number)', () => {
  assert.isTrue([5].hasTypes('number'));
});

unitTest('Array.hasTypes(string)', () => {
  assert.isTrue(["hello"].hasTypes('string'));
});

unitTest('Array.hasTypes(boolean)', () => {
  assert.isTrue([true].hasTypes('boolean'));
});

unitTest('Array.hasTypes(function)', () => {
  assert.isTrue([function() {}].hasTypes('function'));
});

unitTest('Array.hasTypes(arrow-function)', () => {
  assert.isTrue([() => {}].hasTypes('function'));
});

unitTest('Array.hasTypes(array)', () => {
  assert.isTrue([[1, 2, 3]].hasTypes('array'));
});

unitTest('Array.hasTypes(number, string, boolean, function, arrow-function, array)', () => {
  assert.isTrue([1, 'hello', true, function() {}, () => {}, [1, 2, 3]]
    .hasTypes('number', 'string', 'boolean', 'function', 'function', 'array'));
});

endTest();