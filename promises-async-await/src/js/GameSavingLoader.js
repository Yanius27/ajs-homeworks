import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    // eslint-disable-next-line arrow-parens
    return read().then((data) => json(data)).then((response) => JSON.parse(response));
  }
}
