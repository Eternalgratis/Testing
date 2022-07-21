const Calculator = require('./calculator.js');

describe('calculator for adding, subtracting, dividing and multiplying two numbers', () => {
  test('adding two numbers', () => {
    const addTwoNum = Calculator.addition(25, 15);
    expect(addTwoNum).toEqual(40);
  });

  test('subtracting two numbers', () => {
    const subtractTwoNum = Calculator.subtraction(25, 15);
    expect(subtractTwoNum).toEqual(10);
  });

  test('dividing two numbers', () => {
    const divideTwoNum = Calculator.division(25, 5);
    expect(divideTwoNum).toEqual(5);
  });

  test('multiplying two numbers', () => {
    const multiplyTwoNum = Calculator.multiplication(25, 15);
    expect(multiplyTwoNum).toEqual(375);
  });
});