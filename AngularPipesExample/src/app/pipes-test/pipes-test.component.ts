import { Component, OnInit } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import LocaleRu from "@angular/common/locales/ru";
registerLocaleData(LocaleRu, "ru");

@Component({
  selector: 'app-pipes-test',
  // templateUrl: './pipes-test.component.html',
  template: `<div>Uppercase: {{str|uppercase}}</div>
  <div>Uppercase: {{str|lowercase}}</div>
  <div>Lowercase: {{num|number}}</div>
  <div>Percent: {{num|percent}}</div>
  <div>Currency: {{num|currency}}</div>
  <div>Slice: {{str|slice : 23 }}</div>
  <div>Slice: {{str|slice : 0:6 }}</div>
  <div>Slice: {{str|slice : -8}}</div>
  <div>Pi (number : "1.1-2"): {{pi|number:"1.1-2"}}</div>
  <div>Pi (number : "3.5-5"): {{pi|number:"3.5-5"}}</div>
  <div>Pi (number : "3.5-5": "ru"): {{pi|number:"3.5-5":"ru"}}</div>
  <hr/>
  <div>Currency ("UAH" : "code"): {{money | currency : "UAH" : "code" }}</div>
  <div>Currency ("UAH" : "symbol-narrow"): {{money | currency : "UAH" : "symbol-narrow" }}</div>
  <div>Currency ("UAH" : "symbol" : "1.1-1"): {{money | currency : "UAH" : "symbol" :  "1.1-1" }}</div>
  <div>Currency ("UAH" : "Грн."): {{money | currency : "UAH" : "Грн."}}</div>
  <div>Currency ("UAH" : "Грн."): {{money | currency : "UAH" : "Грн." : "1.1-4" : "ru" }}</div>`,
  styleUrls: ['./pipes-test.component.css'],
  
})
export class PipesTestComponent implements OnInit {
  str: string = "London is a capital of Great Britain.";
  num: number = 0.14;
  pi: number = 3.1415;
  money: number = 23.45;
  constructor() { }

  ngOnInit(): void {
  }

}
