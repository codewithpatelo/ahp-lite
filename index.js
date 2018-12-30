const linearAlgebra = require('linear-algebra')();

const Matrix = linearAlgebra.Matrix;


exports.getWeights = function getWeights(c) {
// ERROR HANDLERS

  if (!(c.data)) {
    console.log('ERROR. Matrix argument MUST be a linear-algebra module matrix.');
    return 'ERROR';
  }


  // Calculating colum sum

  let j; // Cols
  i = 0; // Rows
  let colsum = 0;
  const colsumArray = [];

  for (j = 0; j < c.cols; j += 1) {
    for (i = 0; i < c.rows; i += 1) {
      const num = c.data[i][j];
      colsum = num + colsum;
    }


    colsumArray.push(colsum);

    colsum = 0;
  }

  let mcolsumArray = [];


  i = 0;
  for (i = 0; i < c.rows; i += 1) {
    mcolsumArray.push(colsumArray);
  }

  mcolsumArray = new Matrix(mcolsumArray);


  // Normalised Criteria Matrix


  let nc = [];

  nc = c.div(mcolsumArray);


  // EigenVector
  const ev = [];
  num = 0;
  i = 0;
  j = 0;
  for (i = 0; i < c.rows; i += 1) {
    for (j = 0; j < c.cols; j += 1) {
      num = nc.data[i][j] + num;
    }
    num /= c.cols;
    ev.push(num);
  }

  j = 0;
  em = [];
  for (j = 0; j < c.cols; j += 1) {
    em.push(ev);
  }
  em = new Matrix(em);

  // Computing consistency matrix
  const cm = c.mul(em);

  // Weighted sum value
  const wsm = [];
  num = 0;
  i = 0;
  i = 0;
  for (i = 0; i < c.rows; i += 1) {
    for (j = 0; j < c.cols; j += 1) {
      num = cm.data[i][j] + num;
    }
    num = num;
    wsm.push(num);
  }

  // Lamda
  lamda = [];
  j = 0;
  for (j = 0; j < c.cols; j += 1) {
    lamda.push(wsm[j] / ev[j]);
  }

  // LamdaMax

  let lamdaMax = 0;
  j = 0;
  for (j = 0; j < c.cols; j += 1) {
    num = lamda[j] + num;
  }
  lamdaMax = num / c.cols;
  console.log(lamdaMax);

  // Consistency Index
  const ci = (lamdaMax - c.cols) / (c.cols - 1);

  const resp = { ev, ci };

  return resp;
}; // TERMINA FUNCION
