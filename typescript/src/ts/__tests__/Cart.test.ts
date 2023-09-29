/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Cart from '../Cart';
import Movie from '../Movie';
import ElectronicDevice from '../ElectronicDevice';

const cart = new Cart();

function createId() {
  return Math.round(Math.random() * 10000);
}

const id1 = createId();
const id2 = createId();

test('method add() should add item to the cart if it is not already there & the second time the same movie was not added', () => {
  cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', id1, 120));
  cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', id1, 120));
  cart.add(new ElectronicDevice('Xiaomi Redmi Note 10 Pro', 2021, id2, 37000));
  const received = cart.items;
  expect(received.length).toBe(2);
});

test('a device added a second time increases the value of the “quantity” field, the cost of goods is summed up', () => {
  const index = cart.items.findIndex((el) => el.model === 'Xiaomi Redmi Note 10 Pro');
  cart.add(new ElectronicDevice('Xiaomi Redmi Note 10 Pro', 2021, id2, 37000));
  const expected = {
    model: 'Xiaomi Redmi Note 10 Pro',
    type: 'device',
    year: 2021,
    id: id2,
    cost: 74000,
    quantity: 2,
  };
  expect(cart.items[index]).toEqual(expected);
});

test('method "totalCost" should return price for all items without discont', () => {
  const received = cart.totalCost();
  expect(received).toBe(74120);
});

test('method "totalCostWithDiscont" should return price for all items with discont', () => {
  const received = cart.totalCostWithDiscount(25);
  expect(received).toBe(55590);
});

test('method "deleteItem" should delete item with correct id from cart._items', () => {
  cart.deleteItem(id1);
  const index = cart.items.findIndex((el) => el.title === 'The Avengers');
  expect(index).toBe(-1);
});

test('method "deleteItem" should throw error, if id is uncorrect', () => {
  expect(() => cart.deleteItem(12345)).toThrow(new Error('Данного элемента нет в корзине'));
});

test('method "deleteItem" should reduce quantity of devices', () => {
  cart.deleteItem(id2);
  const index = cart.items.findIndex((el) => el.model === 'Xiaomi Redmi Note 10 Pro');
  expect(cart.items[index].quantity).toBe(1);
});

test('getter method should return correct array', () => {
  const received = cart.items;
  const expected = [
    {
      model: 'Xiaomi Redmi Note 10 Pro',
      type: 'device',
      year: 2021,
      id: id2,
      cost: 37000,
      quantity: 1,
    }
  ];
  expect(received).toEqual(expected);
});
