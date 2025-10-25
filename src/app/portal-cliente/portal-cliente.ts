import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardMascota } from './card-mascota/card-mascota';
import { Mascota } from './shared/models/mascota';

@Component({
  selector: 'app-portal-cliente',
  imports: [RouterModule, CardMascota],
  templateUrl: './portal-cliente.html',
  styleUrl: './portal-cliente.css',
})
export class PortalCliente {
  mascotas: Mascota[] = [
    {
      id: 1,
      name: 'Tobi',
      sex: 0,
      especie: 'Perro',
      peso: 8,
      date: '04/06/1999',
    },
    {
      id: 2,
      name: 'Señor Luna',
      sex: 0,
      especie: 'Perro',
      peso: 12,
      date: '05/06/1999',
    },
  ];
}
