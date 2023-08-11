import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender',
})
export class AppenderPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    const [postfix] = args;
    return value + postfix;
  }
}
