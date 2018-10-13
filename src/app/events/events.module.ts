import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { EventsRoutingModule } from './events-routing.module';
import { FontAwesomeModule }   from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [EvenementsComponent]
})
export class EventsModule { }
