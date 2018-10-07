import { NgModule }             from '@angular/core';
import { LoginRoutingModule }   from './login-routing.module';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent }       from './pages/login/login.component';
import { FontAwesomeModule }    from '@fortawesome/angular-fontawesome';
import { CommonModule }         from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
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
