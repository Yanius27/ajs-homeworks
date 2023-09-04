import { ArrayBufferConverter } from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

const buffer = getBuffer();
const arrayBufferConverter = new ArrayBufferConverter();
arrayBufferConverter.load(buffer);

test('method "load" of class ArrayBufferConverter should create a buffer view of length 53 ', () => {
  expect(arrayBufferConverter.bufferView.length).toBe(53);
});

test('method "toString" of class ArrayBufferConverter should return string', () => {
  const received = arrayBufferConverter.toString();
  expect(received).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
