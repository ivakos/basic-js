const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(array) {
    let depth = 0;

    if (!Array.isArray(array)) {
      return 0;
    } else {
      for (let i = 0; i < array.length; i++) {
        let elDepth = this.calculateDepth(array[i]);
        if (depth < elDepth) {
          depth = elDepth;
        }
      }
    }
    return depth += 1;
  }

}

module.exports = {
  DepthCalculator
};
