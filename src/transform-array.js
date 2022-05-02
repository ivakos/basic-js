const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArray = [...array];
  let discarded = false;
  for (let i = 0; i < transformedArray.length; i++) {
    switch (transformedArray[i]) {
      case "--discard-next":
        transformedArray.splice(i, 2);
        i--;
        discarded = true;
        break;
      case "--discard-prev":
        if (i && !discarded) {
          transformedArray.splice(i - 1, 2);
        } else {
          transformedArray.splice(i, 1);
        }
        i--;
        discarded = false;
        break;
      case "--double-next":
        if (transformedArray[i + 1] && !discarded) {
          transformedArray.splice(i, 1, transformedArray[i + 1]);
        } else {
          transformedArray.splice(i, 1);
        }
        discarded = false;
        break;
      case "--double-prev":
        transformedArray.splice(i, 1);
        if (i && !discarded) {
          transformedArray.splice(i - 1, 0, transformedArray[i - 1]);
        }
        discarded = false;
        break;
      default:
        discarded = false;
        break;
    }
  }
  return transformedArray;
}

module.exports = {
  transform
};
