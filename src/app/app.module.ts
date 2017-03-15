import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,Http} from '@angular/http';
import { AppComponent } from './app.component';
import { userComponent } from './components/user.component';
import {aboutComponent} from './components/about.component';
import {contactComponent} from './components/contact.component';
import {homeComponent} from './components/home.component';
import {registerComponent} from './components/register.component';
import {routing} from './app.routing';

import 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    aboutComponent,
    contactComponent,
    homeComponent,
    registerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
