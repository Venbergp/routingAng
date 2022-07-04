import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {LoginComponent} from "./login/login.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
