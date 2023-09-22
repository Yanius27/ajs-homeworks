export default class Person {
  constructor(type, name, health, attack, defence) {
    if (['Bowman', 'Magician', 'Knight', 'Undead', 'Ork'].includes(type)) {
      this.type = type;
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defence = defence;
    } else {
      throw new Error('Неверный тип персонажа');
    }
  }
}
