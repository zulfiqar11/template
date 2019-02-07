import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@NgModule({
  declarations: [WeatherViewComponent],
  exports: [WeatherViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    NgxAuthFirebaseUIModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
