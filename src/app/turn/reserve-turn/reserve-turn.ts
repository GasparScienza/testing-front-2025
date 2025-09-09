import { DatePipe } from '@angular/common';
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
  imports: [MatCardModule, MatDatepickerModule, DatePipe, ReactiveFormsModule],
  templateUrl: './reserve-turn.html',
  styleUrl: './reserve-turn.css',
  providers: [provideNativeDateAdapter(), DatePipe],
})
export class ReserveTurn {
  private formBuilder = inject(FormBuilder);

  public submitted = false;

  constructor(private datePipe: DatePipe, private turnSvc: TurnSvc) {}
  fechaFormateada: string | null = null;
  fechaSelected = signal<Date | null>(null);
  seleccionado = signal<string | null>(null);
  public hoy = new Date();

  public form: FormGroup = this.formBuilder.group({
    descripcion: [''],
    servicio: ['', Validators.required],
    mascota: ['', Validators.required],
  });

  public horarios = [
    { hora: '08:00', disponible: true },
    { hora: '09:00', disponible: true },
    { hora: '10:00', disponible: true },
    { hora: '11:00', disponible: false },
    { hora: '12:00', disponible: true },
    { hora: '13:00', disponible: false },
    { hora: '14:00', disponible: true },
    { hora: '15:00', disponible: true },
    { hora: '16:00', disponible: false },
    { hora: '17:00', disponible: true },
    { hora: '18:00', disponible: true },
    { hora: '19:00', disponible: true },
    { hora: '20:00', disponible: false },
  ];

  public mascotas = [
    { id: 1, nombre: 'Firulais' },
    { id: 2, nombre: 'Michi' },
    { id: 3, nombre: 'Rex' },
  ];

  public servicios = [
    { id: 1, nombre: 'Consulta General' },
    { id: 2, nombre: 'Vacunación' },
    { id: 3, nombre: 'Desparasitación' },
    { id: 4, nombre: 'Cirugía Menor' },
    { id: 5, nombre: 'Atención de Emergencia' },
  ];

  onSelectedDate = (date: Date) => {
    this.fechaFormateada = this.datePipe.transform(date, 'dd/MM/yyyy');
    this.fechaSelected.set(date);
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
