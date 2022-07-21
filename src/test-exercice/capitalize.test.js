const capitalize = require('./capitalize.js')

describe('capilaizing the fist letter of the argument', () => {
    test('capitalize', () => {
        const capitalizeFirstLetter = capitalize('factor')
        expect(capitalizeFirstLetter).toBe('Factor')
    });
})