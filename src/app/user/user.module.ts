import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SavedCitiesComponent } from './saved-cities/saved-cities.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../shared/material.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SavedCitiesComponent, ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxAuthFirebaseUIModule,
    Router,
    UserRoutingModule
  ]
})
export class UserModule { }
