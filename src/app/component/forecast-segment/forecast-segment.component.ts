import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-segment',
  templateUrl: './forecast-segment.component.html',
  styleUrls: ['./forecast-segment.component.sass']
})
export class ForecastSegmentComponent implements OnInit {
  @Input() forecast;

  constructor() {
  }

  ngOnInit() {
  }

}
