/* eslint-disable no-underscore-dangle */
import AttackAndStoned from './AttackAndStoned';
// eslint-disable-next-line import/prefer-default-export
export default class Daemon extends AttackAndStoned {
  // eslint-disable-next-line default-param-last
  constructor(distance, name) {
    super();
    this.name = name;
    this.type = 'Daemon';
    // eslint-disable-next-line no-unused-expressions
    this.distance = distance;
    switch (distance) {
      case 1:
        this._attack = 100;
        break;
      case 2:
        this._attack = 90;
        break;
      case 3:
        this._attack = 80;
        break;
      case 4:
        this._attack = 70;
        break;
      case 5:
        this._attack = 60;
        break;
      default:
        throw new Error('Объект атаки находится слишком далеко');
    }
  }
}
