import { convertPLNToUSD } from '../convertPLNToUSD';

describe('ConvertPLNToUSD', () => {
  it('should return a proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when provided a string as input', () => {
    expect(convertPLNToUSD('-7')).toBeNaN();
    expect(convertPLNToUSD('awef')).toBeNaN();
    expect(convertPLNToUSD('45')).toBeNaN();
  });
  it('should return NaN when argument is missing', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return string "Error" when typeof input is not string nor number', () => {
    expect(convertPLNToUSD([1, 2, 3])).toBe('Error');
    expect(convertPLNToUSD({ a: 1 })).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function () {})).toBe('Error');
  });
  it('should return "$0.00" when input is negative', () => {
    expect(convertPLNToUSD(-5)).toBe('$0.00');
    expect(convertPLNToUSD(-34)).toBe('$0.00');
    expect(convertPLNToUSD(-125.8)).toBe('$0.00');
  });
});
