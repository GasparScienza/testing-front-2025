import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { CalendarOptions, EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-calendario-turnos',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, FormsModule],
  templateUrl: './calendario-turnos.component.html',
  styleUrls: ['./calendario-turnos.component.css']
})
export class CalendarioTurnosComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  selectedEvent: {
    title?: string;
    fecha?: Date;
    descripcion?: string;
  } | null = null;

  turnoTemporal: { 
    mascota?: string; descripcion?: string 
  } = {};

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    selectable: true,
    editable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      
    ],
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this)
  };

  constructor(private cdr: ChangeDetectorRef) {}

  handleEventClick(clickInfo: any) {
    this.selectedEvent = {
      title: clickInfo.event.title,
      fecha: clickInfo.event.start || undefined,
      descripcion: clickInfo.event.extendedProps['descripcion'] || ''
    };
    this.cdr.detectChanges();
    const modal = document.getElementById('eventoModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  handleDateClick(dateInfo: DateClickArg) {
    this.turnoTemporal = { mascota: '', descripcion: '' };
    this.selectedEvent = { title: '', fecha: dateInfo.date, descripcion: '' };
    this.cdr.detectChanges();
    const modal = document.getElementById('nuevoTurnoModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  agregarTurno() {
    const calendarApi = this.calendarComponent.getApi();
    if (this.turnoTemporal.mascota) {
      const nuevoEvento: EventInput = {
        title: `${this.turnoTemporal.mascota} 🐾`,
        date: this.selectedEvent?.fecha,
        descripcion: this.turnoTemporal.descripcion
      };
      calendarApi.addEvent(nuevoEvento);

      // Cerrar modal
      const modal = document.getElementById('nuevoTurnoModal');
      if (modal) {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        bootstrapModal?.hide();
      }
    }
  }
}
