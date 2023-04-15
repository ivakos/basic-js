const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';

  if (typeof str != 'string') str = String(str);
  if (!options.repeatTimes && str) options.repeatTimes = 1;
  if (!options.additionRepeatTimes && options.addition) options.additionRepeatTimes = 1;
  if (!options.separator) options.separator = '+';
  if (typeof options.addition != 'string') options.addition = String(options.addition);
  if (!options.additionSeparator) options.additionSeparator = '|';

  for (let i = 0; i < options.repeatTimes; i++) {
    let buf = '';
    for (let k = 0; k < options.additionRepeatTimes; k++) {
      if (!options.additionRepeatTimes) break;
      buf += options.addition + options.additionSeparator;
    }
    buf = buf.substring(0, buf.lastIndexOf(options.additionSeparator))
    result += str + buf + options.separator;
  }
  result = result.substring(0, result.lastIndexOf(options.separator))
  console.log(typeof options.addition);
  return result;
}

module.exports = {
  repeater
};
