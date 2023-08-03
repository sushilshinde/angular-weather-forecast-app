import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details-card',
  templateUrl: './weather-details-card.component.html',
  styleUrls: ['./weather-details-card.component.css']
})
export class WeatherDetailsCardComponent implements OnInit {

  @Input() valueText: string;
  @Input() weatherValue: string;
  @Input() iconName: string;

  ngOnInit(): void {
    this.iconName = `fa-solid ${this.iconName} icon`;
  }

}
