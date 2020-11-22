import { Component, OnInit } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru";
registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-percent-pipe-test',
  templateUrl: './percent-pipe-test.component.html',
  styleUrls: ['./percent-pipe-test.component.css']
})
export class PercentPipeTestComponent implements OnInit {
  a: number = 0.259;
  b: number = 0.4;
  c: number = 0.8;
  d: number = 1.5;
  constructor() { }

  ngOnInit(): void {
  }

}
