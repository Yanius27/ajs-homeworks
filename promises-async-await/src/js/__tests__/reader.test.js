import read from '../reader';

test('function "read" should create correct buffer', async () => {
  const received = await read();
  expect(received.byteLength).toBe(180);
});
