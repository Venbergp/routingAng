import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ImageComponent} from "./image/image.component";
import {ImagesComponent} from "./images/images.component";



const appRoutes: Routes = [
  {path: '', component: ImagesComponent},
  {path: 'image/:id', component: ImageComponent}
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
