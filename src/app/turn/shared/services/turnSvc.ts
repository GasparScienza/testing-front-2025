import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TurnSvc {
  private http = inject(HttpClient);

  getMascotas() {
    return [
      { id: 1, nombre: 'Tobi' },
      { id: 2, nombre: 'Sr Luna' },
      { id: 3, nombre: 'Kira' },
    ];
  }

  getServicios() {
    return [
      { id: 1, nombre: 'Consulta General' },
      { id: 2, nombre: 'Vacunación' },
      { id: 3, nombre: 'Desparasitación' },
      { id: 4, nombre: 'Cirugía Menor' },
      { id: 5, nombre: 'Atención de Emergencia' },
    ];
  }

  getHorarios() {
    return [
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
  }
}
