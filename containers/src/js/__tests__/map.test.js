import { ErrorRepository } from '../map';

const errorRepository = new ErrorRepository();

test('method should return correct value for the passed code', () => {
  const received = errorRepository.translate(3);
  expect(received).toBe('Error: Данный пользователь не найден');
});

test('method should throw Error for for non-existent code', () => {
  const received = errorRepository.translate(234);
  expect(received).toBe('Unknown error');
});
