const stringLength = require('./testing.js');

describe('lengthOfString', () => {
  test('checkingLength', () => {
    const stringContainer = stringLength('roomsss');
    expect(stringContainer).toEqual(7);
  });
  test('checkingLength', () => {
    const stringContainer = stringLength('');
    expect(stringContainer).toEqual('invalid string');
  });
});
