/* eslint-disable no-unused-vars */
import getBuffer from './getBuffer';

// eslint-disable-next-line import/prefer-default-export
export class ArrayBufferConverter {
  constructor() {
    // eslint-disable-next-line no-unused-expressions
    this.bufferView;
    this.dataString = [];
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    for (let i = 0; i < this.bufferView.length; i += 1) {
      this.dataString[i] = String.fromCharCode(this.bufferView[i]);
    }
    return this.dataString.join('');
  }
}
