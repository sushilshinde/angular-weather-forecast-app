import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { WeatherApiService } from 'src/app/weather-api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  subscription: Subscription;
  weaksDataArray: number[] = [];
  lineChartData: any;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    this.subscription = this.weatherService.weeklytempChange.subscribe(
      (weaksDataArray: any) => {
        this.weaksDataArray = weaksDataArray;
        console.log(weaksDataArray);
        this.lineChartData = {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: this.weaksDataArray,
              label: 'Temperature in °C',
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
    );
    this.weaksDataArray = this.weatherService.getWeeklyTemp();
    this.lineChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: this.weaksDataArray,
          label: 'Temperature in °C',
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
          borderColor: '#000',
        },
        ticks: {
          color: 'black',
        },
      },
      x: {
        grid: {
          display: false,
          borderColor: '#000',
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
