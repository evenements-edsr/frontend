import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { LoginModule }      from './login/login.module';

import { FontAwesomeModule }                               from '@fortawesome/angular-fontawesome';
import { library }                                         from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faExclamationTriangle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent }                                 from './navbar/navbar.component';
import { faFacebook, faGoogle, faTwitter }                 from '@fortawesome/free-brands-svg-icons';
import { EventsModule }                                    from './events/events.module';

library.add(faEnvelope,faExclamationTriangle, faGoogle, faFacebook, faTwitter, faUserCircle);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    EventsModule,
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
