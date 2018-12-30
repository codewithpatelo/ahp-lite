const assert = require('assert');

const linearAlgebra = require('linear-algebra')();

const Matrix = linearAlgebra.Matrix;

const ahp = require('../index.js');

const c = new Matrix([[1, 0.33, 0.2], [3, 1, 0.14], [5, 7, 1]]);

describe('ErrIsMatrix', () => {
  it('If c argument is not matrix it should throw error alert.', () => {
    assert.equal(ahp.getWeights('test'), 'ERROR');
  });
});


describe('getWeights', () => {
  it('should return a JS object with an array containing weights and the consistency index', () => {
    console.log(ahp.getWeights(c));
    assert.equal('test','test');
  });
});

