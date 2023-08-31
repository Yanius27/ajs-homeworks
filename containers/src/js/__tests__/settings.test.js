import { Settings } from '../settings';

const settings = new Settings();

test('method "setSettings" should set correct key-value pair to userSettings map', () => {
  settings.setSettings('theme', 'light');
  const received = settings.userSettings.get('theme');
  expect(received).toBe('light');
});

test('method "setSettings" should throw Error, if invalid values are passed', () => {
  expect(() => settings.setSettings('movements', 'animation')).toThrow(new Error('Данная настройка/значение не предусмотрены'));
});

test('getter "finalSettings" should return actual settings (from default Map and user Map)', () => {
  const received = Array.from(settings.finalSettings);
  const expected = [
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ];
  expect(received).toEqual(expected);
});
