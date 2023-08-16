export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error();
    }
    if (['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error();
    }

    this.health = 100;
    this.level = 1;

    if (this.type === 'Bowerman' || this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (this.type === 'Swordsman' || this.type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error();
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error();
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
