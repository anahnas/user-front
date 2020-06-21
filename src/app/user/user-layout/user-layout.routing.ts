import { Routes } from '@angular/router';

import {CarListComponent} from '../car-list/car-list.component';
import {SearchComponent} from '../search/search.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import {CarComponent} from '../car/car.component';
import {RatingsComponent} from "../ratings/ratings.component";

export const UserLayoutRoutes: Routes = [
  { path: 'carlist', component: CarListComponent },
  { path: 'carlist/:id', component: CarComponent },
  { path: 'carlist/:id/ratings', component: RatingsComponent},
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }

];
