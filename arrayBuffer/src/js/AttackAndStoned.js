/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
export default class AttackAndStoned {
  constructor() {
    this._stoned = false;
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
