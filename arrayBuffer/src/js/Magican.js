/* eslint-disable default-param-last */
import Daemon from './Daemon';

// eslint-disable-next-line import/prefer-default-export
export default class Magican extends Daemon {
  constructor(name, distance) {
    super(name, distance);
    this.type = 'Magican';
  }
}
