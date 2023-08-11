import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'interval-chart-forecast',
  templateUrl: './interval-chart-forecast.component.html',
  styleUrls: ['./interval-chart-forecast.component.css']
})
export class IntervalChartForecastComponent implements OnInit {
  @Input() title: String;
  @Input() label: String;
  @Input() hourlyData: number[];

  lineChartData: any;

  ngOnInit(): void {
    
    this.lineChartData = {
      labels: ['6h', '12h', '18h', '24h'],
      datasets: [
        {
          data: this.hourlyData,
          label: this.label,
          fill: true,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderColor: '#fff',
          tension: 0.5,
          // pointRadius: 0,
          pointHoverBackgroundColor: 'rgba(18, 43, 77, 1)',
          pointHoverBorderColor: '#fff',
          pointBackgroundColor: '#fff',
          pointBorderColor: 'rgba(18, 43, 77, 1)',
        },
      ],
    };
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: {
        position: 'left',
        grid: {
          display: false,
          borderColor: '#fff'
        },
        ticks: {
          color: 'white',

        },
      },
      x: {
        grid: {
          display: false,
          borderColor: '#FFF'
        },
        ticks: {
          color: 'white',
        },
      }
    },
  };

  
}
