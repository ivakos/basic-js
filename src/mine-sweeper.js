const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = matrix.map((element) => element.map(() => 0));

  for (let i = 0; i < result.length; i++) {
    for (let k = 0; k < result[i].length; k++) {

      if (matrix[i][k] == true) {
        for (let row = i - 1; row <= i + 1; row++) {
          for (let col = k - 1; col <= k + 1; col++) {
            if (row >= 0 && col >= 0 && row < result[i].length && col < result.length) {
              result[row][col]++;
            }
          }
        }
      }

      if (matrix[i][k])
        result[i][k]--;

    }
  }
  return result;
}

module.exports = {
  minesweeper
};
