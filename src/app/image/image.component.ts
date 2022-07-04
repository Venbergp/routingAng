import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  id: Number = 0
  src: String = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.id = params["id"]
    })

    this.route.queryParams.subscribe((params: Params) => {
      console.log(params)
      this.src = params["src"]
    })
  }

}
