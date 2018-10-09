import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
  ],
  declarations: [EvenementsComponent]
})
export class EventsModule { }
