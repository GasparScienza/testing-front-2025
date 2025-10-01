import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Register } from './register/register';
import { Login } from './login/login';
import { Turn } from './turn/turn';
import { PortalCliente } from './portal-cliente/portal-cliente';
import { Mascota } from './portal-cliente/mascota/mascota';

export const routes: Routes = [
  { path: '', component: LandingPage }, // Inicio
  { path: 'register', component: Register }, // Registro
  { path: 'login', component: Login }, // Login
  { path: 'cita', component: Turn }, // Cita
  { path: 'cliente', component: PortalCliente }, // Portal de cliente
  { path: 'mascota', component: Mascota }, // Portal de cliente
];
