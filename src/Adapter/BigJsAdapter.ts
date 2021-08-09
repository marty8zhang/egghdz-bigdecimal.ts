import Big, { BigSource, RoundingMode as BigJsRoundingMode } from 'big.js';
import BigDecimalInterface, { BigDecimalSource, RoundingMode } from '../BigDecimalInterface';

export default class BigJsAdapter implements BigDecimalInterface {
  private value: Big;

  constructor(number: BigSource | BigDecimalSource) {
    this.value = BigJsAdapter.getBigFromSource(number);
  }

  static isInt(decimalPrecision: number): boolean {
    return (new Big(decimalPrecision))
      .round(0, BigJsRoundingMode.RoundDown)
      .eq(new Big(decimalPrecision));
  }

  abs(): BigDecimalInterface {
    return new BigJsAdapter(this.value.abs());
  }

  add(number: BigDecimalSource): BigDecimalInterface {
    return new BigJsAdapter(this.value.add(BigJsAdapter.getBigFromSource(number)));
  }

  compare(number: BigDecimalSource): -1 | 0 | 1 {
    return this.value.cmp(BigJsAdapter.getBigFromSource(number));
  }

  divide(number: BigDecimalSource): BigDecimalInterface {
    return new BigJsAdapter(this.value.div(BigJsAdapter.getBigFromSource(number)));
  }

  divideToIntegralValue(number: BigDecimalSource): BigDecimalInterface {
    return new BigJsAdapter(
      this.value.div(BigJsAdapter.getBigFromSource(number)).round(0, BigJsRoundingMode.RoundDown),
    );
  }

  equal(number: BigDecimalSource): boolean {
    return this.value.eq(BigJsAdapter.getBigFromSource(number));
  }

  mod(number: BigDecimalSource): BigDecimalInterface {
    return new BigJsAdapter(this.value.mod(BigJsAdapter.getBigFromSource(number)));
  }

  multiply(number: BigDecimalSource): BigDecimalInterface {
    return new BigJsAdapter(this.value.mul(BigJsAdapter.getBigFromSource(number)));
  }

  pow(exponent: number): BigDecimalInterface {
    if (!BigJsAdapter.isInt(exponent)) {
      throw new TypeError('Failed to raise the number to a power because the provided exponent is not an integer.');
    }

    return new BigJsAdapter(this.value.pow(exponent));
  }

  round(
    decimalPrecision: number = 0,
    roundingMethod: RoundingMode = RoundingMode.ROUNDING_HALF_UP,
  ): BigDecimalInterface {
    if (!BigJsAdapter.isInt(decimalPrecision)) {
      throw new TypeError('Failed to round the number because the provided decimal precision is not an integer.');
    }

    return new BigJsAdapter(
      this.value.round(decimalPrecision, BigJsAdapter.convertRoundingMode(roundingMethod)),
    );
  }

  subtract(number: BigDecimalSource): BigDecimalInterface {
    return new BigJsAdapter(this.value.minus(BigJsAdapter.getBigFromSource(number)));
  }

  toFixedDecimalPrecisionString(
    decimalPrecision: number = 2,
    roundingMode: RoundingMode = RoundingMode.ROUNDING_HALF_UP,
  ): string {
    if (!BigJsAdapter.isInt(decimalPrecision)) {
      throw new TypeError('Failed to convert the number into a fixed decimal precision string because the provided decimal precision is not an integer.');
    }

    return this.value.toFixed(decimalPrecision, BigJsAdapter.convertRoundingMode(roundingMode));
  }

  toString(): string {
    return this.value.toString();
  }

  private static getBigFromSource(number: BigSource | BigDecimalInterface) {
    if (typeof number === 'string'
      || typeof number === 'number') {
      return new Big(number);
    }
    return new Big(number.toString());
  }

  private static convertRoundingMode(roundingMode: RoundingMode): BigJsRoundingMode {
    switch (roundingMode) {
      case RoundingMode.ROUNDING_UP:
        return BigJsRoundingMode.RoundUp;
      case RoundingMode.ROUNDING_DOWN:
        return BigJsRoundingMode.RoundDown;
      case RoundingMode.ROUNDING_HALF_UP:
        return BigJsRoundingMode.RoundHalfUp;
      case RoundingMode.ROUNDING_HALF_EVEN:
        return BigJsRoundingMode.RoundHalfEven;
      default:
        throw new TypeError('Failed to convert the given rounding mode into a matched targeted one.');
    }
  }
}
