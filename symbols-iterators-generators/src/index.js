/* eslint-disable no-console */
/* eslint-disable import/extensions */
import Team from './js/Team.js';
import Person from './js/Person.js';

const teamA = new Team();
const knightJohn = new Person('Knight', 'John', 100, 40, 60);
const magicianMary = new Person('Magician', 'Mary', 100, 60, 40);

teamA.addCharacter(knightJohn);
teamA.addCharacter(magicianMary);

for (const char of teamA) {
  console.log(char);
}
