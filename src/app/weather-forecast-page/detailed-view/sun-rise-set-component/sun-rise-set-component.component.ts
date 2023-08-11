import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sun-rise-set-component',
  templateUrl: './sun-rise-set-component.component.html',
  styleUrls: ['./sun-rise-set-component.component.css'],
})
export class SunRiseSetComponentComponent implements OnInit {
  sunriseTime: String;
  sunsetTime: String;

  ngOnInit(): void {
    const curDate = new Date(Date.now());

    const formatedDate =
      curDate.getMonth() +
      1 +
      ' ' +
      curDate.getUTCDate() +
      ' ' +
      curDate.getFullYear();

    this.sunriseTime = new Date(formatedDate + ' 06:12 UTC').toISOString();

    this.sunsetTime = new Date(formatedDate + ' 19:05 UTC').toISOString();
  }
}
