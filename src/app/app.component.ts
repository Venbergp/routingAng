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

  logged : boolean = false

  constructor(public auth: AuthService) {
  }

  changeAuthStatus(status : string) {
    console.log(this.logged)
    if (status=='login') {
      this.logged = false
      this.auth.login()
    } else {
      this.logged = true
      this.auth.logout()
    }
  }
}
