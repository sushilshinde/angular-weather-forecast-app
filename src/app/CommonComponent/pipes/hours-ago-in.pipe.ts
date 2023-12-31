import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursAgoIn',
})
// Custom pipe to find the hours ago or the hours left to
// Calculated by getting current time and finding the difference/sum between the time recieved by argument
export class HoursAgoInPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const tempDate:any = new Date(value.slice(0, -1));
    const dt: any = new Date();
    const seconds = Math.floor((dt - tempDate) / 1000);

    let interval = Math.floor(seconds / 3600);
    
    if (interval > 1) {
      return interval + ' hours ago';
    } else {
      return 'in ' + Math.abs(interval)  + " hours"
    }
    return '';
  }
}
