const linearAlgebra = require('linear-algebra')();

const Matrix = linearAlgebra.Matrix;

const ri = [0, 0, 0.58, 0.9, 1.12, 1.24, 1.32, 1.41];

exports.getWeights = function getWeights(c) {
// ERROR HANDLERS

  if (!(c.data)) {
    console.log('ERROR. Matrix argument MUST be a linear-algebra module matrix.');
    return 'ERROR';
  }

  if (c.cols > 8) {
    console.log('ERROR. There are too many criteria to analyse. Try with less than 8.');
    return 'ERROR.';
  }

  // Calculating colum sum

  let j; // Cols
  let i = 0; // Rows
  let colsum = 0;
  let num = 0;
  const colsumArray = [];

  for (j = 0; j < c.cols; j += 1) {
    for (i = 0; i < c.rows; i += 1) {
      num = c.data[i][j];
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
    num = 0;
  }


  j = 0;
  let em = [];
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
    wsm.push(num);
    num = 0;
  }


  // Lamda
  const lamda = [];
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


  // Consistency Index
  let ci = (lamdaMax - c.cols) / (c.cols - 1);
  j = c.cols - 1;
  let cr = ci / ri[j];

  // Rounded values
  j = 0;
  for (j = 0; j < c.cols; j += 1) {
    ev[j] = Math.round(ev[j] * 100) / 100;
  }

  ci = Math.round(ci * 100) / 100;
  cr = Math.round(cr * 100) / 100;

  const resp = { ev, ci, cr };

  return resp;
}; // TERMINA FUNCION
