import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ForecastComponent} from './forecast/forecast.component';
import {AboutComponent} from './about/about.component';
import { ForecastSegmentComponent } from './forecast-segment/forecast-segment.component';
import { ForecastByZipcodeComponent } from './forecast-by-zipcode/forecast-by-zipcode.component';

@NgModule({
    declarations: [
        AppComponent,
        ForecastComponent,
        AboutComponent,
        ForecastSegmentComponent,
        ForecastByZipcodeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
