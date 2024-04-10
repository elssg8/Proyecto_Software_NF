import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // import interactionPlugin

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    height: "auto", // add interactionPlugin to plugins
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // now dateClick should be recognized
    events: [
      { title: 'event 1', date: '2024-04-09' },
      { title: 'event 2', date: '2024-04-12' }
    ]
  };

  //MAKE SURE THE CALENDAR FIT THE SCREEN
  //https://fullcalendar.io/docs/height
  //https://fullcalendar.io/docs/aspectRatio
  //https://fullcalendar.io/docs/height-responsiveness


  handleDateClick(arg: any) {
    // handle date click event here
    alert('date click! ' + arg.dateStr)
  }

}
