// add.test.js
const factorial = require('./factorial.js');

test('factorial of 3', () => {
  expect(factorial(3)).toBe(6);
});

test('factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });

  test('factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial of -10', () => {
    expect( () =>  factorial(-10)   ).toThrow();
  });