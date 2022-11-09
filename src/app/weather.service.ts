import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICurrentWeatherData } from './icurrent-weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {   }
   
  getCurrentWeather(city: string, country: string){
    return this.httpClient.get<ICurrentWeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appID=${environment.appId}`).pipe(map(data => this.transformToICurrentWeather(data)))
  }

  private transformToICurrentWeather(data: ICurrentWeatherData){
    return{
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      temperature: data.main.temp * 9/5 - 459.67,
      description: data.weather[0].description,
      image: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }
  }
}
