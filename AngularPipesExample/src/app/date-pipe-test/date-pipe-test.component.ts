import { Component, OnInit } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru";
registerLocaleData(localeRu, "ru");
 
@Component({
  selector: 'app-date-pipe-test',
  templateUrl: './date-pipe-test.component.html',
  styleUrls: ['./date-pipe-test.component.css']
})
export class DatePipeTestComponent implements OnInit {
  dateObject : Date = new Date(2020, 10, 23);
  dateString : string = "2020-11-23T00:00:00.000Z";
  dateNumber : number = 1606089600000;
  constructor() { }

  ngOnInit(): void {
  }

}
