import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent }      from './pages/profil/profil.component';

const routes: Routes = [
  {path: 'profil', component: ProfilComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ProfilRoutingModule {
}
