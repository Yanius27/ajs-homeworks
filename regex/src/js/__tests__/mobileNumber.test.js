import validateNumber from '../mobileNumber';

test('validator should return number in correct view', () => {
  const received = validateNumber('+7 960 000 00 00');
  expect(received).toBe('+79600000000');
});

test('validator should return number in correct view', () => {
  const received = validateNumber('8 (927) 000-00-00');
  expect(received).toBe('+79270000000');
});
