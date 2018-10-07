import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class LoginRoutingModule {
}
