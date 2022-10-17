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
  
  let stroka = String(str);

  let repeatTimes = 1;
   if(options.repeatTimes) repeatTimes = +options.repeatTimes;

  let separator = "+";
  if(options.separator) separator = options.separator;

  let addition = '';
  if(options.addition ) {
    addition = String(options.addition);
  };

  let additionRepeatTimes = 1;
  if(options.additionRepeatTimes) additionRepeatTimes = +options.additionRepeatTimes;

  let additionSeparator = "|";
  if(options.additionSeparator) additionSeparator = options.additionSeparator;

  result = stroka + (addition + additionSeparator).repeat(additionRepeatTimes);
  result = result.split('')
  let buffer = result.lastIndexOf(additionSeparator)-additionSeparator.length + 1;
  result.splice(buffer, additionSeparator.length )
  result = result.join('');

  result = (result + separator).repeat(repeatTimes);
  result = result.split('')
  buffer = result.lastIndexOf(separator)-separator.length + 1;
  result.splice(buffer, separator.length)
  result = result.join('');
  console.log(result)
  return result;
}
repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })

module.exports = {
  repeater
};
