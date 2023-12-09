import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { WeatherDatas } from '../../models/interfaces/WeatherDatas';
import { WeatherService } from '../services/weather.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  initCityName = 'London'
  weatherDatas!: WeatherDatas
  searchIcon = faMagnifyingGlass
  constructor(private weatherService:WeatherService) {
    this.getDatas(this.initCityName)
  }

  getDatas(cityName:string):void {
      this.weatherService.getWeatherData(cityName).subscribe({
        next: (res) => {
          res && (this.weatherDatas = res)
        },
        error: (err) => console.log(err)
      })//.unsubscribe()
  }

  onSubmit():void {
    this.getDatas(this.initCityName)
    this.initCityName = ''
  }
}
