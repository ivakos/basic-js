const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = 0;
  let column = arr[0].length;
  for(let i = 0; i < column; i++){
    for( let k = 0; k < arr.length; k++){
      if(arr[k][i]!=0)
      sum = sum + arr[k][i];
      else break;
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
