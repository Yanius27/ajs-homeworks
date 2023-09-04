import getBuffer from '../getBuffer';

test('function getBuffer should return buffer of byteLengt 106', () => {
  const buffer = getBuffer();
  expect(buffer.byteLength).toBe(106);
});
