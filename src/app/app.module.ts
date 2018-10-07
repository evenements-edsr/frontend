import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { LoginModule }      from './login/login.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
