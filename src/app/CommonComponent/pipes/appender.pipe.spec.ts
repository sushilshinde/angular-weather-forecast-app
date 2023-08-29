import { AppenderPipe } from './appender.pipe';

fdescribe('AppenderPipe', () => {
  it('create an instance', () => {
    const pipe = new AppenderPipe();
    expect(pipe).toBeTruthy();
  });
});
