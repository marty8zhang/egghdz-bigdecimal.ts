export const enum RoundingMode {
  ROUNDING_DOWN = 0,
  ROUNDING_UP = 1,
  ROUNDING_HALF_UP = 2,
  ROUNDING_HALF_EVEN = 3,
}

export type BigDecimalSource = number | string | BigDecimalInterface;

export default interface BigDecimalInterface {
  add(number: BigDecimalSource): BigDecimalInterface;

  subtract(number: BigDecimalSource): BigDecimalInterface;

  multiply(number: BigDecimalSource): BigDecimalInterface;

  divide(number: BigDecimalSource): BigDecimalInterface;

  divideToIntegralValue(number: BigDecimalSource): BigDecimalInterface;

  mod(number: BigDecimalSource): BigDecimalInterface;

  pow(exponent: number): BigDecimalInterface;

  compare(number: BigDecimalSource): -1 | 0 | 1;

  equal(number: BigDecimalSource): boolean;

  abs(): BigDecimalInterface;

  round(decimalPrecision: number, roundingMode: RoundingMode): BigDecimalInterface;

  toFixedDecimalPrecisionString(decimalPrecision: number, roundingMode: RoundingMode): string;

  toString(): string;
}
