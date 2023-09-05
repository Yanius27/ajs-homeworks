/* eslint-disable no-underscore-dangle */
import Daemon from '../Daemon';

test('property this._attack must depend on parameter "distance"', () => {
  const distances = [1, 2, 3, 4, 5];
  const expectedAttack = [100, 90, 80, 70, 60];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < distances.length; i++) {
    const daemonJohn = new Daemon(distances[i], 'John');
    expect(daemonJohn._attack).toBe(expectedAttack[i]);
  }
});

test('attack getter should return correct message', () => {
  const daemonKolya = new Daemon(3, 'Kolya');
  expect(daemonKolya.attack).toBe('Daemon Kolya наносит 80% урон');
});

test('attack setter should set the correct value', () => {
  const daemonPeter = new Daemon(2, 'Peter');
  daemonPeter.attack = 90;
  expect(daemonPeter._attack).toBe(90);
});

test('attack setter must not change the attack value if an invalid parameter is passed.', () => {
  const daemonPeter = new Daemon(2, 'Peter');
  daemonPeter.attack = 130;
  expect(daemonPeter._attack).toBe(90);
});

test('if "distance" parameter is uncorrect should throw new Error', () => {
  expect(() => new Daemon(7, 'Maria')).toThrow(new Error('Объект атаки находится слишком далеко'));
});

test('setting the "stoned" property should change this.attack property according to the formula', () => {
  const daemonOleg = new Daemon(5, 'Oleg');
  daemonOleg.stoned = true;
  expect(daemonOleg.attack).toBe('Daemon Oleg наносит 48% урон');
});

test('if this._stoned property is not declared when it is called, it should return undefined', () => {
  const daemonVladimir = new Daemon(4, 'Vladimir');
  expect(daemonVladimir._stoned).toBe(undefined);
});

test('stoned getter should return correct message', () => {
  const daemonVladimir = new Daemon(4, 'Vladimir');
  daemonVladimir.stoned = true;
  expect(daemonVladimir.stoned).toBe('Daemon Vladimir одурманен');
});

test('stoned getter should return correct message', () => {
  const daemonVladimir = new Daemon(4, 'Vladimir');
  expect(daemonVladimir.stoned).toBe('Daemon Vladimir не одурманен');
});
