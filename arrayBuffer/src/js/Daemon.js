class Daemon {
  constructor(name, type = 'Daemon') {
    this.name = name;
    this.type = type;
    this.attack;
    this.stoned;
  }

  get attackGetter() {
    return `${this.type} ${this.name} наносит ${this.attack}% урон`;
  }

  set attackSetter(distance) {
    switch(distance) {
      case 1:
        this.attack = 100;
        break;
      case 2:
        this.attack = 90;
        break ; 
      case 3:
        this.attack = 80;
        break;
      case 4:
        this.attack = 70;
        break ; 
      case 5:
        this.attack = 60;
        break;
    }
  }
  
  get stonedGetter() {
    return this.stoned ? `${this.type} ${this.name} одурманен` : `${this.type} ${this.name} не одурманен`;
  }

  set stonedSetter(distance) {
    this.attackSetter = distance;
    this.attack -= Math.log2(distance) * 5;
    this.stoned = true;
  }

}
