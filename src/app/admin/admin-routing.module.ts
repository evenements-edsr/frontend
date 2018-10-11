import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AdminComponent }        from './admin.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { EvenementsComponent }   from './pages/evenements/evenements.component';
import { EvenementComponent }    from './pages/evenement/evenement.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, children : [
      {path : 'utilisateurs', component : UtilisateursComponent},
      {path : 'evenements', component : EvenementsComponent},
      {path : 'evenements', component : EvenementComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
