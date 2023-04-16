const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrChain: [],

  getLength() {
    return this.arrChain.length;
  },

  addLink(value) {
    this.arrChain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position % 1 != 0 || isNaN(position) || position <= 0 || position > this.arrChain.length) {
      this.arrChain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.arrChain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.arrChain.reverse();
    return this;
  },

  finishChain() {
    let result = "";
    this.arrChain.forEach((elem) => {
      result += `${elem}~~`;
    });
    result = result.slice(0, -2);
    this.arrChain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
