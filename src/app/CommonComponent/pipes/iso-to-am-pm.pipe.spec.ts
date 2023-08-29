import { IsoToAmPmPipe } from './iso-to-am-pm.pipe';

fdescribe('IsoToAmPmPipe', () => {
  it('create an instance', () => {
    const pipe = new IsoToAmPmPipe();
    expect(pipe).toBeTruthy();
  });
});
