const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(front = true) {
    this.front = front;
  }

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  encrypt(message, key) {
    let result = '';

    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let countKeyIndex = 0;

    for (let i = 0; i < message.length; i++) {

      if (countKeyIndex > key.length - 1) countKeyIndex = 0;
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }

      let letterIndex = this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[countKeyIndex]);

      if (this.alphabet.length <= letterIndex) {
        letterIndex -= this.alphabet.length;
      }

      result += this.alphabet[letterIndex];
      countKeyIndex++;
    }

    if (this.front == false) result = result.split('').reverse().join('')

    return result
  }


  decrypt(encryptedMessage, key) {
    let result = '';

    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let countKeyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {

      if (countKeyIndex > key.length - 1) countKeyIndex = 0;
      if (!this.alphabet.includes(encryptedMessage[i])) {
        result += encryptedMessage[i];
        continue;
      }

      let letterIndex = this.alphabet.indexOf(encryptedMessage[i]) - this.alphabet.indexOf(key[countKeyIndex]);

      if (letterIndex < 0) {
        letterIndex = this.alphabet.length - -letterIndex;
      }

      result += this.alphabet[letterIndex];
      countKeyIndex++;
    }

    if (this.front == false) result = result.split('').reverse().join('')

    return result
  }

}

module.exports = {
  VigenereCipheringMachine
};
