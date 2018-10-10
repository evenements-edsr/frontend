import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ProfilComponent }     from './pages/profil/profil.component';
import { ProfilRoutingModule } from './profil-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule { }
