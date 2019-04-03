import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForecastByZipcodeComponent} from './forecast-by-zipcode.component';

describe('ForecastByZipcodeComponent', () => {
  let component: ForecastByZipcodeComponent;
  let fixture: ComponentFixture<ForecastByZipcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             imports: [
               RouterTestingModule,
               FormsModule,
               ReactiveFormsModule
             ],
             declarations: [
                 ForecastByZipcodeComponent
             ]
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
