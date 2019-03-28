import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forecast-by-zipcode',
  templateUrl: './forecast-by-zipcode.component.html',
  styleUrls: ['./forecast-by-zipcode.component.sass']
})
export class ForecastByZipcodeComponent implements OnInit {

  zipForm: FormGroup;
  zipcode = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.zipForm = this.formBuilder.group({
      zipcode: ['', Validators.required]
    });
  }

  getForecast() {
// TODO: navigate
  }

  clear() {
    this.zipcode = '';
  }
}
