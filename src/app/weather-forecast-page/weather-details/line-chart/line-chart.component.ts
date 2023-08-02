import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  lineChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Rain',
        fill: true,
        backgroundColor: 'rgba(18, 43, 77, 0.5)',
        borderColor: 'rgba(18, 43, 77, 1)',
        tension: 0.5,
        // pointRadius: 0,
        pointHoverBackgroundColor: 'rgba(18, 43, 77, 1)',
        pointHoverBorderColor: '#fff',
        pointBackgroundColor: 'rgba(18, 43, 77, 1)',
        pointBorderColor: '#fff',
      },
    ],
  };
}
