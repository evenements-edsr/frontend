import { NgModule }             from '@angular/core';
import { LoginRoutingModule }   from './login-routing.module';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent }       from './pages/login/login.component';
import { FontAwesomeModule }    from '@fortawesome/angular-fontawesome';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { UiModule }             from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: [
    LoginComponent,
    InscriptionComponent
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {
}
