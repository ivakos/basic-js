const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = ''
    for(let i=0, a=0; i < str.length; i++){
      if(str[i] == str[i+1]) a++;
      else{
        result = result + (a? a + 1 : '') + str[i]
        a = 0;
      }
    }
    return result;
}

module.exports = {
  encodeLine
};
