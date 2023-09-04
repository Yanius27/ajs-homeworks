/* eslint-disable default-param-last */
import Daemon from './Daemon';

// eslint-disable-next-line import/prefer-default-export
export class Magican extends Daemon {
  constructor(name, type = 'Magican', distance) {
    super(name, type, distance);
  }
}
