import { HoursAgoInPipe } from './hours-ago-in.pipe';

fdescribe('HoursAgoInPipe', () => {
  it('create an instance', () => {
    const pipe = new HoursAgoInPipe();
    expect(pipe).toBeTruthy();
  });
});
