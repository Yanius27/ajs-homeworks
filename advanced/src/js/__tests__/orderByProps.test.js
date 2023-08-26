import orderByProps from '../orderByProps';

const obj = {
  name: 'Ivan', age: 29, adress: 'Moskov', profession: 'developer', hobbie: 'music', lastName: 'Alekseev',
};

test('function should return correct result', () => {
  const order = ['name', 'lastName'];
  const received = orderByProps(obj, order);
  const expected = [
    { key: 'name', value: 'Ivan' },
    { key: 'lastName', value: 'Alekseev' },
    { key: 'adress', value: 'Moskov' },
    { key: 'age', value: 29 },
    { key: 'hobbie', value: 'music' },
    { key: 'profession', value: 'developer' },
  ];
  expect(received).toEqual(expected);
});

test('the function should throw an error if the key from the order does not exist', () => {
  const order = ['name', 'lastName', 'nickName'];
  expect(() => orderByProps(obj, order)).toThrow(new Error('Одного из переданных ключей нет в исходном объекте'));
});
