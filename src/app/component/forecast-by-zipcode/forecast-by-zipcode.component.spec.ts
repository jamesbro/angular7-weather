import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForecastByZipcodeComponent} from './forecast-by-zipcode.component';

describe('ForecastByZipcodeComponent', () => {
  let component: ForecastByZipcodeComponent;
  let fixture: ComponentFixture<ForecastByZipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ForecastByZipcodeComponent]
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastByZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
        .toBeTruthy();
  });
});
