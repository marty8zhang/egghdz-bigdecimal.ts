import BigJsAdapter from './BigJsAdapter';
import { RoundingMode } from '../BigDecimalInterface';

describe('`isInt()`', () => {
  it('returns true for integer', () => {
    expect(BigJsAdapter.isInt(1.0)).toBe(true);
  });

  it('returns true for non-integer', () => {
    expect(BigJsAdapter.isInt(1.1)).toBe(false);
  });
});

describe('`abs()`', () => {
  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .abs()
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .abs()
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for zero', () => {
    expect(
      (new BigJsAdapter(0))
        .abs()
        .equal(0),
    )
      .toBeTruthy();
  });
});

describe('`add()`', () => {
  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add(5.678)
        .equal(6.912),
    )
      .toBeTruthy();
  });

  it('works for a positive string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add('5.678')
        .equal(6.912),
    )
      .toBeTruthy();
  });

  it('works for a positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add(new BigJsAdapter(5.678))
        .equal(6.912),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add(-5.678)
        .equal(-4.444),
    )
      .toBeTruthy();
  });

  it('works for a negative string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add('-5.678')
        .equal(-4.444),
    )
      .toBeTruthy();
  });

  it('works for a negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add(new BigJsAdapter(-5.678))
        .equal(-4.444),
    )
      .toBeTruthy();
  });

  it('works for zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add(0)
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for string zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add('0.000')
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for `BigDecimalInterface` zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .add(new BigJsAdapter(0))
        .equal(1.234),
    )
      .toBeTruthy();
  });
});

describe('`compare()`', () => {
  it('works for a smaller number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .compare(1.235),
    )
      .toBe(-1);
  });

  it('works for a smaller string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .compare('1.235'),
    )
      .toBe(-1);
  });

  it('works for a smaller `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .compare(new BigJsAdapter(1.235)),
    )
      .toBe(-1);
  });

  it('works for an equal number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .compare(1.234),
    )
      .toBe(0);
  });

  it('works for an equal string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .compare('1.234'),
    )
      .toBe(0);
  });

  it('works for an equal `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .compare(new BigJsAdapter(1.234)),
    )
      .toBe(0);
  });

  it('works for a bigger  number', () => {
    expect(
      (new BigJsAdapter(1.235))
        .compare(1.234),
    )
      .toBe(1);
  });

  it('works for a bigger string number', () => {
    expect(
      (new BigJsAdapter(1.235))
        .compare('1.234'),
    )
      .toBe(1);
  });

  it('works for a bigger `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.235))
        .compare(new BigJsAdapter(1.234)),
    )
      .toBe(1);
  });
});

describe('`divide()`', () => {
  it('throws an error with zero', () => {
    expect(() => (new BigJsAdapter(1.234)).divide(0))
      .toThrow('[big.js] Division by zero');
  });

  it('throws an error with string zero', () => {
    expect(() => (new BigJsAdapter(1.234)).divide('0'))
      .toThrow('[big.js] Division by zero');
  });

  it('throws an error with `BigDecimalInterface` zero', () => {
    expect(() => (new BigJsAdapter(1.234)).divide(new BigJsAdapter(0)))
      .toThrow('[big.js] Division by zero');
  });

  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .divide(2)
        .equal(0.617),
    )
      .toBeTruthy();
  });

  it('works for a positive string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .divide('2.0')
        .equal(0.617),
    )
      .toBeTruthy();
  });

  it('works for a positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .divide(new BigJsAdapter(2.0))
        .equal(0.617),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .divide(-2)
        .equal(-0.617),
    )
      .toBeTruthy();
  });

  it('works for a negative string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .divide('-2.0')
        .equal(-0.617),
    )
      .toBeTruthy();
  });

  it('works for a negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .divide(new BigJsAdapter(-2.0))
        .equal(-0.617),
    )
      .toBeTruthy();
  });
});

describe('`divideToIntegralValue()`', () => {
  it('throws an error with zero', () => {
    expect(() => (new BigJsAdapter(1.234)).divideToIntegralValue(0))
      .toThrow('[big.js] Division by zero');
  });

  it('throws an error with string zero', () => {
    expect(() => (new BigJsAdapter(1.234)).divideToIntegralValue('0'))
      .toThrow('[big.js] Division by zero');
  });

  it('throws an error with `BigDecimalInterface` zero', () => {
    expect(() => {
      (new BigJsAdapter(1.234)).divideToIntegralValue(new BigJsAdapter(0));
    })
      .toThrow('[big.js] Division by zero');
  });

  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .divideToIntegralValue(2)
        .equal(2),
    )
      .toBeTruthy();
  });

  it('works for a positive string number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .divideToIntegralValue('2.1')
        .equal(2),
    )
      .toBeTruthy();
  });

  it('works for a positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .divideToIntegralValue(new BigJsAdapter(2.01))
        .equal(2),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .divideToIntegralValue(-2)
        .equal(-2),
    )
      .toBeTruthy();
  });

  it('works for a negative string number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .divideToIntegralValue('-2.1')
        .equal(-2),
    )
      .toBeTruthy();
  });

  it('works for a negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .divideToIntegralValue(new BigJsAdapter(-2.01))
        .equal(-2),
    )
      .toBeTruthy();
  });
});

describe('`equal()`', () => {
  it('works for an equal positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for an equal positive string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .equal('1.234'),
    )
      .toBeTruthy();
  });

  it('works for an equal positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .equal(new BigJsAdapter(1.234)),
    )
      .toBeTruthy();
  });

  it('works for an equal negative number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .equal(-1.234),
    )
      .toBeTruthy();
  });

  it('works for an equal negative string number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .equal('-1.234'),
    )
      .toBeTruthy();
  });

  it('works for an equal negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .equal(new BigJsAdapter(-1.234)),
    )
      .toBeTruthy();
  });

  it('works for zero', () => {
    expect(
      (new BigJsAdapter(0))
        .equal(0.0000),
    )
      .toBeTruthy();
  });

  it('works for string zero', () => {
    expect(
      (new BigJsAdapter(0))
        .equal('0.0000'),
    )
      .toBeTruthy();
  });

  it('works for `BigDecimalInterface` zero', () => {
    expect(
      (new BigJsAdapter(0))
        .equal(new BigJsAdapter(0.0000)),
    )
      .toBeTruthy();
  });

  it('works for an unequal number', () => {
    expect(
      (new BigJsAdapter(0))
        .equal(0.0000000001),
    )
      .toBeFalsy();
  });

  it('works for an unequal string number', () => {
    expect(
      (new BigJsAdapter(0))
        .equal('0.0000000001'),
    )
      .toBeFalsy();
  });

  it('works for `BigDecimalInterface` zero', () => {
    expect(
      (new BigJsAdapter(0))
        .equal(new BigJsAdapter(0.0000000001)),
    )
      .toBeFalsy();
  });
});

describe('`mod()`', () => {
  it('throws an error with zero', () => {
    expect(() => (new BigJsAdapter(1.234)).mod(0))
      .toThrow('[big.js] Division by zero');
  });

  it('throws an error with string zero', () => {
    expect(() => (new BigJsAdapter(1.234)).mod('0'))
      .toThrow('[big.js] Division by zero');
  });

  it('throws an error with `BigDecimalInterface` zero', () => {
    expect(() => {
      (new BigJsAdapter(1.234)).mod(new BigJsAdapter(0));
    })
      .toThrow('[big.js] Division by zero');
  });

  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .mod(2)
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for a positive string number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .mod('2.1')
        .equal(1.034),
    )
      .toBeTruthy();
  });

  it('works for a positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .mod(new BigJsAdapter(2.01))
        .equal(1.214),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .mod(-2)
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for a negative string number', () => {
    expect(
      (new BigJsAdapter(-5.234))
        .mod('-2.1')
        .equal(-1.034),
    )
      .toBeTruthy();
  });

  it('works for a negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(5.234))
        .mod(new BigJsAdapter(-2.01))
        .equal(1.214),
    )
      .toBeTruthy();
  });

  it('works for integers', () => {
    expect(
      (new BigJsAdapter(8))
        .mod(3)
        .equal(2),
    )
      .toBeTruthy();
  });
});

describe('`multiply()`', () => {
  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .multiply(5.678)
        .equal(7.006652),
    )
      .toBeTruthy();
  });

  it('works for a positive string number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .multiply('5.678')
        .equal(7.006652),
    )
      .toBeTruthy();
  });

  it('works for a positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .multiply(new BigJsAdapter(5.678))
        .equal(7.006652),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .multiply(-5.678)
        .equal(-7.006652),
    )
      .toBeTruthy();
  });

  it('works for a negative string number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .multiply('-5.678')
        .equal(7.006652),
    )
      .toBeTruthy();
  });

  it('works for a negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .multiply(new BigJsAdapter(5.678))
        .equal(-7.006652),
    )
      .toBeTruthy();
  });

  it('works for zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .multiply(0)
        .equal(0),
    )
      .toBeTruthy();
  });

  it('works for string zero', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .multiply('0.000')
        .equal(0),
    )
      .toBeTruthy();
  });

  it('works for `BigDecimalInterface` zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .multiply(new BigJsAdapter(0.000))
        .equal(0),
    )
      .toBeTruthy();
  });
});

describe('`pow()`', () => {
  it('throws an error with an invalid exponent', () => {
    expect(() => (new BigJsAdapter(1.234)).pow(5.1))
      .toThrow('Failed to raise the number to a power because the provided exponent is not an integer.');
  });

  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .pow(5)
        .equal(2.861381721051424),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .pow(5)
        .equal(-2.861381721051424),
    )
      .toBeTruthy();
  });

  it('works for a negative exponent', () => {
    expect(
      (new BigJsAdapter(-2))
        .pow(-4)
        .equal(0.0625),
    )
      .toBeTruthy();
  });

  it('works for a zero exponent', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .pow(0)
        .equal(1),
    )
      .toBeTruthy();
  });
});

describe('`round()`', () => {
  it('throws an error with a non-integer decimal precision', () => {
    expect(() => (new BigJsAdapter(1.234)).round(1.1))
      .toThrow('Failed to round the number because the provided decimal precision is not an integer.');
  });

  it('throws an error with an invalid rounding mode', () => {
    expect(() => (new BigJsAdapter(1.234)).round(2, 5))
      .toThrow('Failed to convert the given rounding mode into a matched targeted one.');
  });

  it('works for default parameter values', () => {
    expect(
      (new BigJsAdapter(1.234))
        .round()
        .equal(1),
    )
      .toBeTruthy();
  });

  it('works for default rounding mode', () => {
    expect(
      (new BigJsAdapter(1.235))
        .round(2)
        .equal(1.24),
    )
      .toBeTruthy();
  });

  it('works for rounding down', () => {
    expect(
      (new BigJsAdapter(0.123456789))
        .round(8, RoundingMode.ROUNDING_DOWN)
        .equal(0.12345678),
    )
      .toBeTruthy();
  });

  it('works for rounding up', () => {
    expect(
      (new BigJsAdapter(0.1234567891))
        .round(9, RoundingMode.ROUNDING_UP)
        .equal(0.12345679),
    )
      .toBeTruthy();
  });

  it('works for rounding half up', () => {
    expect(
      (new BigJsAdapter(0.1234567895))
        .round(9, RoundingMode.ROUNDING_HALF_UP)
        .equal(0.12345679),
    )
      .toBeTruthy();
  });

  it('works for rounding half even - up', () => {
    expect(
      (new BigJsAdapter(0.1234567895))
        .round(9, RoundingMode.ROUNDING_HALF_EVEN)
        .equal(0.123456790),
    )
      .toBeTruthy();
  });

  it('works for rounding half even - down', () => {
    expect(
      (new BigJsAdapter(0.1234567885))
        .round(9, RoundingMode.ROUNDING_HALF_EVEN)
        .equal(0.123456788),
    )
      .toBeTruthy();
  });
});

describe('`subtract()`', () => {
  it('works for a positive number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .subtract(5.678)
        .equal(-4.444),
    )
      .toBeTruthy();
  });

  it('works for a positive string number', () => {
    expect(
      (new BigJsAdapter(5.678))
        .subtract('1.234')
        .equal(4.444),
    )
      .toBeTruthy();
  });

  it('works for a positive `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .subtract(new BigJsAdapter(5.678))
        .equal(-6.912),
    )
      .toBeTruthy();
  });

  it('works for a negative number', () => {
    expect(
      (new BigJsAdapter(1.234))
        .subtract(-5.678)
        .equal(6.912),
    )
      .toBeTruthy();
  });

  it('works for a negative string number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .subtract('-5.678')
        .equal(4.444),
    )
      .toBeTruthy();
  });

  it('works for a negative `BigDecimalInterface` number', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .subtract(new BigJsAdapter(-5.678))
        .equal(4.444),
    )
      .toBeTruthy();
  });

  it('works for zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .subtract(0)
        .equal(1.234),
    )
      .toBeTruthy();
  });

  it('works for string zero', () => {
    expect(
      (new BigJsAdapter(-1.234))
        .subtract('0.000')
        .equal(-1.234),
    )
      .toBeTruthy();
  });

  it('works for `BigDecimalInterface` zero', () => {
    expect(
      (new BigJsAdapter(1.234))
        .subtract(new BigJsAdapter(0.000))
        .equal(1.234),
    )
      .toBeTruthy();
  });
});

describe('`toFixedDecimalPrecisionString()`', () => {
  it('throws an error with a non-integer decimal precision', () => {
    expect(() => {
      (new BigJsAdapter(1.234)).toFixedDecimalPrecisionString(1.1);
    })
      .toThrow('Failed to convert the number into a fixed decimal precision string because the provided decimal precision is not an integer.');
  });

  it('throws an error with an invalid rounding mode', () => {
    expect(() => {
      (new BigJsAdapter(1.234)).toFixedDecimalPrecisionString(2, 5);
    })
      .toThrow('Failed to convert the given rounding mode into a matched targeted one.');
  });

  it('works for default parameter values', () => {
    expect(
      (new BigJsAdapter(1.234))
        .toFixedDecimalPrecisionString(),
    )
      .toBe('1.23');
  });

  it('works for default rounding mode', () => {
    expect(
      (new BigJsAdapter(1.235))
        .toFixedDecimalPrecisionString(2),
    )
      .toBe('1.24');
  });

  it('works for rounding down', () => {
    expect(
      (new BigJsAdapter(0.123456789))
        .toFixedDecimalPrecisionString(8, RoundingMode.ROUNDING_DOWN),
    )
      .toBe('0.12345678');
  });

  it('works for rounding up', () => {
    expect(
      (new BigJsAdapter(0.1234567891))
        .toFixedDecimalPrecisionString(9, RoundingMode.ROUNDING_UP),
    )
      .toBe('0.123456790');
  });

  it('works for rounding half up', () => {
    expect(
      (new BigJsAdapter(0.1234567895))
        .toFixedDecimalPrecisionString(9, RoundingMode.ROUNDING_HALF_UP),
    )
      .toBe('0.123456790');
  });

  it('works for rounding half even - up', () => {
    expect(
      (new BigJsAdapter(0.1234567895))
        .toFixedDecimalPrecisionString(9, RoundingMode.ROUNDING_HALF_EVEN),
    )
      .toBe('0.123456790');
  });

  it('works for rounding half even - down', () => {
    expect(
      (new BigJsAdapter(0.1234567885))
        .toFixedDecimalPrecisionString(9, RoundingMode.ROUNDING_HALF_EVEN),
    )
      .toBe('0.123456788');
  });
});
