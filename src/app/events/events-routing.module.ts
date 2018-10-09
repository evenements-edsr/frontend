import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementsComponent }  from './pages/evenements/evenements.component';

const routes: Routes = [
  {path: 'evenements', component: EvenementsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class EventsRoutingModule {
}
