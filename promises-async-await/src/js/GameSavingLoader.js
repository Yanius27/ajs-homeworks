import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    // eslint-disable-next-line arrow-parens
    try {
      const buffer = await read();
      const data = await json(buffer);
      return JSON.parse(data);
    } catch (e) {
      throw new Error(e);
    }
  }
}
