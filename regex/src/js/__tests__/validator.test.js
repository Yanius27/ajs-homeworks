import Validator from '../nicknames';

test('method should return "false" for uncorrect nickname', () => {
  const validator = new Validator();
  const received = validator.validateUsername('1Nikolay-Vlasov ');
  expect(received).toBe(false);
});
