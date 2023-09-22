/* eslint-disable prefer-destructuring */
class Team {
  constructor() {
    this.composition = [];
    this.from = 0;
    this.to = 0;
  }

  addCharacter(character) {
    this.composition.push(character);
    this.to = this.composition.length - 1;
  }

  [Symbol.iterator]() {
    return {
      currentPerson: this.from,
      lastPerson: this.to,
      next() {
        if (this.currentPerson <= this.lastPerson) {
          const actualPerson = this.composition[this.currentPerson];
          this.currentPerson += 1;
          return {
            value: actualPerson,
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

const team = new Team();
team.addCharacter('Nikolay');
team.addCharacter('Maria');
team.addCharacter('John');

for (let item of team) {
  console.log(item);
}
