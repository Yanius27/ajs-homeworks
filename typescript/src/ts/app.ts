import Cart from "./Cart";
import Movie from "./Movie";
import ElectronicDevice from "./ElectronicDevice";

const cart = new Cart();

function createId(): number {
  return Math.round(Math.random() * 10000);
}

const id1 = createId();
const id2 = createId();
const id3 = createId();
const id4 = createId();

cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', id1, 120));
cart.add(new Movie('Oppenheimer', 2023, 'США, Великобритания', '', ['биография', 'драма', 'история'], '180 мин. / 03:00', id2, 250));
cart.add(new ElectronicDevice('Xiaomi Redmi Note 10 Pro', 2021, id3, 37000));
cart.add(new ElectronicDevice('PocketBook 617', 2022, id4, 12000));


console.log(cart.items);

console.log(cart.totalCost());

console.log(cart.totalCostWithDiscount(25));

setTimeout(() => {
  cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', id1, 120));
  cart.add(new ElectronicDevice('Xiaomi Redmi Note 10 Pro', 2021, id3, 37000));
  console.log(cart.items);
}, 10000);

setTimeout(() => {
  cart.add(new Movie('The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин./02:17', id1, 120));
  cart.add(new ElectronicDevice('Xiaomi Redmi Note 10 Pro', 2021, id3, 37000));
  console.log(cart.items);
}, 5000);

