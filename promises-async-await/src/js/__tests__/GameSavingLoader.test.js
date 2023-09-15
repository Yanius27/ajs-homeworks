/* eslint-disable linebreak-style */
import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('method of class should return correct object', async () => {
  read.mockReturnValue(Promise.reject);
  // const expected = {
  //   id: 9,
  //   created: 1546300800,
  //   userInfo: {
  //     id: 1,
  //     name: 'Hitman',
  //     level: 10,
  //     points: 2000,
  //   },
  // };
  expect(async () => {
    await GameSavingLoader.load();
  }).toThrow(new Error());
});
