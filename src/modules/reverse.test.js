const reverseString = require('./reverse.js');

describe('reverseString', () => {
  test('reverseLength', () => {
    const reverseContainer = reverseString('grasp');
    expect(reverseContainer).toEqual('psarg');
  });
});