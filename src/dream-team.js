const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res = [];
  if(!members) return false;
    for(let i = 0; i<members.length;i++){
    if((typeof members[i]) === 'string')
    {
      let m = members[i].trim().split('');
      res.push(m[0].toUpperCase())}
  }
  res.sort();
  res = res.join('');
  return res;
}

createDreamTeam(['Matt',  '       Ann', 'Dmitry', 'Max'])
module.exports = {
  createDreamTeam
};
