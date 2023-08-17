import Zombie from '../zombie';

test('the child class must have the expected properties', () => {
  const receivedZombie = new Zombie('John');
  const expectedZombie = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(receivedZombie).toEqual(expectedZombie);
});
