import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  imgs = [
    {id: 1, src: "https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg"},
    {id: 2, src: "https://proprikol.ru/wp-content/uploads/2020/02/skachat-krasivye-kartinki-na-telefon-besplatno-4.jpg"},
    {id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErasFW51SyMSyJ5pVsrBokXcQO4Lfj8Cl0A&usqp=CAU"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
