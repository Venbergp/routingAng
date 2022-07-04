import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingAng';

  constructor(public auth: AuthService) {
  }

  changeAuthStatus(status : string) {
    if (status=='login') {
      this.auth.login()
    } else {
      this.auth.logout()
    }
  }
}
