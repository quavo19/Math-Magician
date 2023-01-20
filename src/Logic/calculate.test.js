import calculate from './calculate';

describe('test basic operations', () => {
  let calculeObj = { total: null, next: null, operation: null };
  test('test adding any number appart from zero', () => {
    calculeObj = calculate(calculeObj, '1');
    calculeObj = calculate(calculeObj, '1');
    calculeObj = calculate(calculeObj, '1');
    calculeObj = calculate(calculeObj, '1');
    expect(calculeObj.next).toBe('1111');
  });

  test('test adding multiple zeros', () => {
    calculeObj = calculate(calculeObj, 'AC');
    calculeObj = calculate(calculeObj, '0');
    calculeObj = calculate(calculeObj, '0');
    calculeObj = calculate(calculeObj, '0');
    expect(calculeObj.next).toBe('0');
  });
  test('Test AC ', () => {
    calculeObj = calculate(calculeObj, 'AC');
    calculeObj = calculate(calculeObj, '9');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '5');
    calculeObj = calculate(calculeObj, 'AC');
    expect(calculeObj.next).toBe(null);
  });

  test('Test equal operation', () => {
    calculeObj = calculate(calculeObj, '9');
    calculeObj = calculate(calculeObj, '=');
    expect(calculeObj.next).toBe(null || undefined);
  });
});

describe('test operations', () => {
  let calculeObj = { total: null, next: null, operation: null };

  test('addittion test', () => {
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '10');
    expect(calculeObj.next).toBe('10');
    calculeObj = calculate(calculeObj, '=');
    const result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((10 + 10));
  });
test('Test sign change', () => {
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '-');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((10 - 10));
    calculeObj = calculate(calculeObj, '-');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '+/-');
    calculeObj = calculate(calculeObj, '=');
    result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((10 - 10) - (-10));
  });

  test('Test multiple addittions', () => {
    calculeObj = calculate(calculeObj, 'AC');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '10');
    expect(calculeObj.next).toBe('10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((10 + 10));
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((10 + 10) + 10);
  });

  test('Test multiple multiplication signs', () => {
    calculeObj = calculate(calculeObj, '5');
    calculeObj = calculate(calculeObj, 'x');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    let result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((5 * 10));
    calculeObj = calculate(calculeObj, 'x');
    calculeObj = calculate(calculeObj, '10');
    calculeObj = calculate(calculeObj, '=');
    result = parseInt(calculeObj.total, 10);
    expect(result).toEqual((5 * 10) * 10);
  });

  test('Test successive operation with dot', () => {
    calculeObj = calculate(calculeObj, '4');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '+');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '=');
    let result = parseFloat(calculeObj.total, 10);
    expect(result).toEqual((4.2 + 2.2));
    calculeObj = calculate(calculeObj, 'x');
    calculeObj = calculate(calculeObj, '2');
    calculeObj = calculate(calculeObj, '.');
    calculeObj = calculate(calculeObj, '7');
    calculeObj = calculate(calculeObj, '+/-');
    calculeObj = calculate(calculeObj, '=');
    result = parseFloat(calculeObj.total, 10);
    const expectedResult = parseFloat(((4.2 + 2.2) * (-2.7)).toFixed(2));
    expect(result).toEqual(expectedResult);
  });
});