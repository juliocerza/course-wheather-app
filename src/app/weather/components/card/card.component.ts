import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherDatas } from '../../../models/interfaces/WeatherDatas';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() weatherDatas!:WeatherDatas

  minTempIcon = faTemperatureLow
  maxTempIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}
