import Character from '../character';
import Undead from '../undead';

test('the parent class must have the expected properties', () => {
  const receivedCharacter = new Character('Mary', 'Magician');
  const expectedCharacter = {
    name: 'Mary',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(receivedCharacter).toEqual(expectedCharacter);
});

test('levelUp must work correct', () => {
  const character = new Undead('Sean', 'Undead');
  const expectedCharacter = {
    name: 'Sean',
    type: 'Undead',
    level: 2,
    attack: 30,
    defence: 30,
    health: 100,
  };
  character.levelUp();
  expect(character).toEqual(expectedCharacter);
});

test('damage must work correct', () => {
  const character = new Undead('Sean', 'Undead');
  const expectedCharacter = {
    name: 'Sean',
    type: 'Undead',
    level: 1,
    attack: 25,
    defence: 25,
    health: 100 - 10 * (1 - 25 / 100),
  };
  character.damage(10);
  expect(character).toEqual(expectedCharacter);
});
