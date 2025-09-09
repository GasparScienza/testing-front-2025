import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReserveTurn } from './reserve-turn/reserve-turn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turn',
  imports: [ReserveTurn, CommonModule],
  templateUrl: './turn.html',
  styleUrl: './turn.css',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Turn {
  public reservaCita = false;
  public citas = false;

  reservarCita() {
    this.reservaCita = !this.reservaCita;
    this.citas = false;
  }

  misCitas() {
    this.citas = !this.citas;
    this.reservaCita = false;
  }
}
