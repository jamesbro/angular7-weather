import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/app.component';
import {ForecastComponent} from './component/forecast/forecast.component';
import {AboutComponent} from './component/about/about.component';
import {ForecastSegmentComponent} from './component/forecast-segment/forecast-segment.component';
import {ForecastByZipcodeComponent} from './component/forecast-by-zipcode/forecast-by-zipcode.component';
import {ForecastBarChartComponent} from './component/forecast-bar-chart/forecast-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    AboutComponent,
    ForecastSegmentComponent,
    ForecastByZipcodeComponent,
    ForecastBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
