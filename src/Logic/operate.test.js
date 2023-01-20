import operate from './operate';

describe('Test all oprations', () => {
  test('Test addition operation', () => {
    const result = operate(20, 1, '+');
    expect(result).toEqual('21');
  });

  test('Test Substraction operation', () => {
    const result = operate(20, 1, '-');
    expect(result).toEqual('19');
  });

  test('Test Multiplication operation', () => {
    const result = operate(20, 1, 'x');
    expect(result).toEqual('20');
  });

  test('Test Divide operation', () => {
    const result = operate(20, 1, '÷');
    expect(result).toEqual('20');
  });

  test('Test Modulo operation', () => {
    const result = operate(20, 5, '%');
    expect(result).toEqual('0');
  });

  test('Test plus operation', () => {
    const result = operate(50, 2, '+');
    expect(result).toEqual('52');
  });
});