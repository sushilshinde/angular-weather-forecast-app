import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { WeatherData } from 'src/app/model/weather.model';
import { WeatherApiService } from 'src/app/weather-services/weather-api.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  subscription: Subscription;
  weaksDataArray: number[] = [];
  lineChartData: any;
  @Input() borderColor: String;
  @Input() backgroundColor: String;
  @Input() pHBackgroundColor: String;
  @Input() pHBorderColor: String;
  @Input() pBorderColor: String;
  @Input() pBackgroundColor: String;
  @Input() yLabels: String[];
  @Input() tooltipLabel: String;

  constructor(private store: Store<{ weather: WeatherData }>) {}

  ngOnInit(): void {
    // setting line chart Data
    this.subscription = this.store
      .select('weather')
      .subscribe((weatherData: WeatherData) => {
        this.lineChartData = {
          labels: this.yLabels,
          datasets: [
            {
              data: this.formatData(weatherData.temperatureWeekly),
              label: this.tooltipLabel,
              fill: true,
              backgroundColor: this.backgroundColor,
              borderColor: this.borderColor,
              tension: 0.5,
              pointHoverBackgroundColor: this.pHBackgroundColor,
              pointHoverBorderColor: this.pHBorderColor,
              pointBackgroundColor: this.pBackgroundColor,
              pointBorderColor: this.pBorderColor,
            },
          ],
        };
      });
  }

  formatData(data: any): number[] {
    const arr = [];
    if (data) {
      data.forEach((hour) => {
        for (const key in hour) {
          arr.push(hour[key]);
        }
      });
    }
    return [...arr];
  }

  // Line chart options
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
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
