import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('function "read" should throw Error', async () => {
  try {
    read.mockRejectedValueOnce(new Error('Ошибка чтения файла'));
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).toEqual('Error: Ошибка чтения файла');
  }
});
