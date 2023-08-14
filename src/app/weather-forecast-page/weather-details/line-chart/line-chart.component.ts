import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { WeatherApiService } from 'src/app/weather-api.service';

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


  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    // setting line chart Data
    this.subscription = this.weatherService.weeklytempChange.subscribe(
      (weaksDataArray: any) => {
        this.weaksDataArray = weaksDataArray;
        this.lineChartData = {
          labels: this.yLabels,
          datasets: [
            {
              data: this.weaksDataArray,
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
        
      }
    );
    this.weaksDataArray = this.weatherService.getWeeklyTemp();
    this.lineChartData = {
      labels: this.yLabels,
      datasets: [
        {
          data: this.weaksDataArray,
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
    this.subscription.unsubscribe();
  }
}
