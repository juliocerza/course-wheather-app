import { Routes } from '@angular/router';
import { HomeComponent } from './weather/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: 'weather', component: HomeComponent}
];
