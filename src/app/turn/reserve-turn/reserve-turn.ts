import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TurnSvc } from '../shared/services/turnSvc';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-reserve-turn',
  imports: [
    MatCardModule,
    MatDatepickerModule,
    DatePipe,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './reserve-turn.html',
  styleUrl: './reserve-turn.css',
  providers: [provideNativeDateAdapter(), DatePipe],
})
export class ReserveTurn {
  private formBuilder = inject(FormBuilder);

  public submitted = false;
  public mascotas: any[] = [];
  public servicios: any[] = [];
  public horarios: any[] = [];
  public habHorarios = false;

  constructor(private datePipe: DatePipe, private turnSvc: TurnSvc) {
    this.mascotas = this.turnSvc.getMascotas();
    this.servicios = this.turnSvc.getServicios();
    this.horarios = this.turnSvc.getHorarios();
  }
  fechaFormateada: string | null = null;
  fechaSelected = signal<Date | null>(null);
  seleccionado = signal<string | null>(null);
  public hoy = new Date();

  public form: FormGroup = this.formBuilder.group({
    descripcion: [''],
    servicio: ['', Validators.required],
    mascota: ['', Validators.required],
  });

  onSelectedDate = (date: Date) => {
    this.fechaFormateada = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.fechaSelected.set(date);
    this.habHorarios = true;
  };

  onSubmit = () => {
    this.submitted = true;
    if (this.form.invalid) return;

    const postValues = {
      fecha: this.fechaFormateada,
      hora: this.seleccionado(),
      mascota: this.form.value.mascota,
      servicio: this.form.value.servicio,
      descripcion: this.form.value.descripcion,
    };
    console.log(postValues);
  };

  public validoCampo = (campo: string) => {
    return this.form.controls[campo].errors;
  };
}
