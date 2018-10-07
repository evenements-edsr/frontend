import { Component, OnInit } from '@angular/core';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';

@Component({
  selector: 'edsr-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {lang : 'fr'});

// Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });
  }

}
