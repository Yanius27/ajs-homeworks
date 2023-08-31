// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((e) => {
      if (e.name === character.name && e.type === character.type) {
        throw new Error('Данный персонаж уже в команде');
      }
    });
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.forEach((e) => {
        if (e.name === character.name && e.type === character.type) {
          throw new Error('Один из персонажей уже в команде');
        }
      });
      this.members.add(character);
    }
  }

  toArray() {
    const setArr = [...this.members];
    return setArr;
  }
}
