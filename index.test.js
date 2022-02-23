const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  });
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const copy = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const result = utils.trimProperties(input);
    expect(input).toEqual(copy);
    expect(result).not.toEqual(input);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const result = utils.trimPropertiesMutation(input);
    expect(result).toEqual(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const copy = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const result = utils.trimPropertiesMutation(input);
    expect(input).not.toEqual(copy);
    expect(result).toBe(input);
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 2 }, { integer: 5 }, { integer: 1 }, { integer: 3 }];
    const result = utils.findLargestInteger(input);
    expect(result).toBe(5);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let count = counter.countDown();
    expect(count).toBe(3);
  });
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    let count = counter.countDown();
    count = counter.countDown();
    expect(count).toBe(2);
  });
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let count = counter.countDown();
    count = counter.countDown();
    count = counter.countDown();
    count = counter.countDown();
    expect(count).toBe(0);
    count = counter.countDown();
    expect(count).toBe(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let season = seasons.next();
    expect(season).toBe('summer');
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let season = seasons.next();
    season = seasons.next();
    expect(season).toBe('fall');
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let season = seasons.next();
    season = seasons.next();
    season = seasons.next();
    expect(season).toBe('winter');
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let season = seasons.next();
    season = seasons.next();
    season = seasons.next();
    season = seasons.next();
    expect(season).toBe('spring');
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let season = seasons.next();
    season = seasons.next();
    season = seasons.next();
    season = seasons.next();
    season = seasons.next();
    expect(season).toBe('summer');
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let season = "";
    for(let i = 0; i < 40; i++){
      season = seasons.next();
    }
    expect(season).toBe('spring');
  });
});

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    let odometer = focus.drive(100);
    expect(odometer).toBe(100);
  });
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
});
