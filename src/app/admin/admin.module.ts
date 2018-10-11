import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { EvenementComponent } from './pages/evenement/evenement.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, UtilisateursComponent, EvenementsComponent, EvenementComponent]
})
export class AdminModule { }
