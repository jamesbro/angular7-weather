import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forecast-by-zipcode',
  templateUrl: './forecast-by-zipcode.component.html',
  styleUrls: ['./forecast-by-zipcode.component.sass']
})
export class ForecastByZipcodeComponent implements OnInit {
  zipcode = '';

  constructor() { }

  ngOnInit() {
  }

  getForecast(){
// TODO: navigate
  }

  clear() {
    this.zipcode = '';
  }
}
