/* eslint-disable prefer-destructuring */
export default class Team {
  constructor() {
    this.team = [];
  }

  addCharacter(character) {
    this.team.push(character);
  }
  // 1 Задача. Итераторы

  // [Symbol.iterator]() {
  //   const composition = this.team;
  //   let count = 0;
  //   return {
  //     next() {
  //       if (count < composition.length) {
  //         const actualPerson = composition[count];
  //         count += 1;
  //         return {
  //           value: actualPerson,
  //           done: false,
  //         };
  //       }
  //       return {
  //         value: undefined,
  //         done: true,
  //       };
  //     },
  //   };
  // }

  // 2 Задача. Генераторы

  * [Symbol.iterator]() {
    for (const char of this.team) {
      yield char;
    }
  }
}
