import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender',
})
// Custom pipe to append the two recived arguments and return them both.
export class AppenderPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const [postfix] = args;
    return value + postfix;
  }
}
