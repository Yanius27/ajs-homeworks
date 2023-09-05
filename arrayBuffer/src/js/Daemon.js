/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/prefer-default-export
export default class Daemon {
  // eslint-disable-next-line default-param-last
  constructor(distance, name, type = 'Daemon') {
    this.name = name;
    this.type = type;
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

  get attack() {
    if (this._stoned) {
      // eslint-disable-next-line operator-assignment
      this._attack -= Math.log2(this.distance) * 5;
      this._attack = Math.round(this._attack);
    }
    return `${this.type} ${this.name} наносит ${this._attack}% урон`;
  }

  set attack(attack) {
    if (attack <= 100 && attack > 0) {
      this._attack = attack;
    }
  }

  get stoned() {
    return this._stoned ? `${this.type} ${this.name} одурманен` : `${this.type} ${this.name} не одурманен`;
  }

  set stoned(param) {
    this._stoned = param;
  }
}
