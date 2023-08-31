import { Team } from '../set';
import Character from '../character';

const teamA = new Team();
const knight = new Character('Nikolay', 'knight', 100);
const magician = new Character('Maria', 'magician', 100);
const dwarf = new Character('Anatoly', 'dwarf', 100);
const bowerman = new Character('Bill', 'bowerman', 100);
const elf = new Character('Olga', 'elf', 100);

test('method "add" should add new character to Set collection', () => {
  teamA.add(knight);
  expect(teamA.members.has(knight)).toBe(true);
});

test('method "add" should throw Error if the character is already in the collection', () => {
  expect(() => teamA.add(knight)).toThrow(new Error('Данный персонаж уже в команде'));
});

test('method "addAll" should add several new characters to Set collection', () => {
  teamA.addAll(magician, dwarf, bowerman);
  [magician, dwarf, bowerman].forEach((e) => {
    expect(teamA.members.has(e)).toBe(true);
  });
});

test('method "add" should throw Error if the one or more of characters is already in the collection', () => {
  expect(() => teamA.addAll(knight, elf)).toThrow(new Error('Один из персонажей уже в команде'));
});

test('method "toArray" should turn a collection into an array', () => {
  const setArr = teamA.toArray();
  expect(Array.isArray(setArr)).toBe(true);
});
