import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ForecastService} from '../../service/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {
  zipcode: string;
  currentForecast: any;

  constructor(private forecastService: ForecastService, private route: ActivatedRoute) {
    this.zipcode = this.route.snapshot.params.zipcode;
  }

  ngOnInit() {
    this.forecastService.getForecastByZipcode(this.zipcode)
        .subscribe(forecast => this.currentForecast = forecast);
  }

}
