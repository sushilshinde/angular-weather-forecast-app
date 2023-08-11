import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isoToAmPm',
})
export class IsoToAmPmPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const date = new Date(value);    
    var hours = date.getUTCHours();
    var tempMinutes = date.getUTCMinutes();    
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = tempMinutes < 10 ? '0' + tempMinutes : tempMinutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}
