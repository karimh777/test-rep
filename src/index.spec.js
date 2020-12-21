import { cube, Pi } from './index';

describe('cube', () => {
  it('returns the cube of a number multiplied by itself 3 times', () => {
    expect(cube(2)).toBe(8);
  });
});

describe('Pi', () => {
  it('returns Pi value', () => {
    expect(Pi()).toBe(3.14213);
  });
});
