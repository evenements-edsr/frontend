import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ProfilComponent }     from './pages/profil/profil.component';
import { ProfilRoutingModule } from './profil-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule { }
