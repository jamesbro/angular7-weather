import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForecastByZipcodeComponent} from "./component/forecast-by-zipcode/forecast-by-zipcode.component";
import {AboutComponent} from "./component/about/about.component";
import {ForecastComponent} from "./component/forecast/forecast.component";

const routes: Routes = [
  {path: '', component: ForecastByZipcodeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'forecast/:zipcode', component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
