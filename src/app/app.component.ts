import { Component, Inject } from '@angular/core';
import { WeatherService } from './Services/weather.service';
import { weather } from './weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public _temp?:weather;

  constructor( private weatherService:WeatherService){}

  ngOnInit(){
  this.weatherService.getWeatherData('Lahore')
    .subscribe({
      next:(Response)=>{
        this._temp = Response;
      }
    })

  }
}
