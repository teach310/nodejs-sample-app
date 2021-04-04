const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('async adds 1 + 2 to equal 3', async () => {
  await waitForSeconds(2);
  expect(sum(1, 2)).toBe(3);
});


const waitForSeconds = (seconds) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000)
  })
}