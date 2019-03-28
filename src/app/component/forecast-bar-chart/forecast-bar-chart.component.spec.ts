import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForecastBarChartComponent} from './forecast-bar-chart.component';

describe('ForecastBarChartComponent', () => {
  let component: ForecastBarChartComponent;
  let fixture: ComponentFixture<ForecastBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ForecastBarChartComponent]
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
        .toBeTruthy();
  });
});
