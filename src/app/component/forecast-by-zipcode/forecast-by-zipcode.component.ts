import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forecast-by-zipcode',
  templateUrl: './forecast-by-zipcode.component.html',
  styleUrls: ['./forecast-by-zipcode.component.sass']
})
export class ForecastByZipcodeComponent implements OnInit {

  zipForm: FormGroup;
  zipcode: string;

  constructor() {
  }

  ngOnInit() {
    this.zipForm = new FormGroup({
      zipcode: new FormControl('', Validators.pattern(/\d{5}/))
    });
  }

  clear() {
    this.zipForm.reset();
  }
}
