import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastSegmentComponent } from './forecast-segment.component';

describe('ForecastSegmentComponent', () => {
  let component: ForecastSegmentComponent;
  let fixture: ComponentFixture<ForecastSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
