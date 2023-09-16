import Validator from '../nicknames';

test('method should return "false" for uncorrect nickname', () => {
  const validator = new Validator();
  const received = validator.validateUsername('1Nikolay-Vlasov ');
  expect(received).toBe(false);
});

test('method should return "true" for correct nickname', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Nikolay32-Vlasov');
  expect(received).toBe(true);
});
