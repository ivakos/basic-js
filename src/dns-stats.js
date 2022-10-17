const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
  domains = [
  'code.yandex.ru',
   'music.yandex.ru',
   'yandex.ru'
  ]
function getDNSStats(arr) {
  const store = {};
  for (let i = 0; i < arr.length; i++) {
    const arrNew = arr[i].split('.').reverse().map((x) => "." + x)
    const newCollection = [];
    arrNew.reduce((res, v) => {
      const a = res + v;
      newCollection.push(a);
      return a
    }, "");
    newCollection.forEach(v => {
      const count = store[v];
      if (count) {
        store[v] = count + 1;
      } else {
        store[v] = 1;
      }
    });
  }
  return store;
}
getDNSStats(domains)
module.exports = {
  getDNSStats
};
