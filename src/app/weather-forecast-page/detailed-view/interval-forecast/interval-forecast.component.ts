import { Component, Input } from '@angular/core';

@Component({
  selector: 'interval-forecast',
  templateUrl: './interval-forecast.component.html',
  styleUrls: ['./interval-forecast.component.css']
})
export class IntervalForecastComponent {
  text: string = 'Chances of Rain'
  @Input() hourlyData: number[];
}
