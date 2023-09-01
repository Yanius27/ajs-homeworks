// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Данный персонаж уже в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    const setArr = [...this.members];
    return setArr;
  }
}
