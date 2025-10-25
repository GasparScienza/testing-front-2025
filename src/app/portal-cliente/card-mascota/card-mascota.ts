import { Component, input } from '@angular/core';
import { Mascota } from '../shared/models/mascota';

@Component({
  selector: 'app-card-mascota',
  imports: [],
  templateUrl: './card-mascota.html',
  styleUrl: './card-mascota.css',
})
export class CardMascota {
  mascota = input<Mascota>();
}
