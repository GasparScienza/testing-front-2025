import { Routes } from '@angular/router';
import {LandingPage} from './landing-page/landing-page';
import {Register} from './register/register';
import {Login} from './login/login';

export const routes: Routes = [
  { path: '', component: LandingPage }, // Inicio
  { path: 'register', component: Register }, // Registro
  { path: 'login', component: Login }, // Login
];
