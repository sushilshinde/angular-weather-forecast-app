import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  month: any = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  todayDate: any = new Date();
  currentMonth?: any = this.month[this.todayDate.getMonth()];

  currentYear?: any = this.todayDate.getFullYear();
  currentDateAndYear?: any = this.todayDate.toDateString();

  ngOnInit(): void {
    console.log(this.month[this.todayDate.getMonth()]);
  }
}
