import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForecastByZipcodeComponent} from "./forecast-by-zipcode/forecast-by-zipcode.component";
import {AboutComponent} from "./about/about.component";
import {ForecastComponent} from "./forecast/forecast.component";

const routes: Routes = [
    {path: '', component: ForecastByZipcodeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'forecast', component: ForecastComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
