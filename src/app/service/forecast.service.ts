import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  env = environment;

  constructor(private http: HttpClient) {
  }

  getForecastByZipcode(zipcode: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=imperial&APPID=${this.env.WEATHER_API_KEY}`);
  }
}
