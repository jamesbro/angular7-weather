import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ForecastComponent} from './forecast.component';
import {MockComponent} from '../../../../jest-setup';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  // TODO: mock forecast service
  beforeEach(async(() => TestBed.configureTestingModule({
                                  imports: [RouterTestingModule],
                                  declarations: [
                                    ForecastComponent,
                                    MockComponent('app-forecast-bar-chart', {inputs: ['forecast']})
                                  ]
                                })
                                .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
        .toBeTruthy();
  });
});
