import { PricePipe } from './price.pipe';

describe('PricePipe', () => {

  const pipe = new PricePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "123" to "$1.23"', () => {
    expect(pipe.transform(123)).toBe('$1.23');
  });

  it('transforms "1" to "$0.01"', () => {
    expect(pipe.transform(1)).toBe('$0.01');
  });

  it('transforms "99999" to "$999.99"', () => {
    expect(pipe.transform(99999)).toBe('$999.99');
  });

});
