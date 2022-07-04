import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ImageComponent} from "./image/image.component";
import {ImagesComponent} from "./images/images.component";
import {AuthGuardService} from "./auth-guard.service";
import {LoginComponent} from "./login/login.component";



const appRoutes: Routes = [
  {path: '', component: ImagesComponent},
  {path: '123', component: ImagesComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'image/:id',
    component: ImageComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '/login' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
