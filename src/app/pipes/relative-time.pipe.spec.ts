import { RelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {

  const pipe = new RelativeTimePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms new Date to "a few seconds ago"', () => {
    expect(pipe.transform(new Date())).toBe('a few seconds ago');
  });

});
