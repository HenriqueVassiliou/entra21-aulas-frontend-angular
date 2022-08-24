import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert',
  templateUrl: './propert.component.html',
  styleUrls: ['./propert.component.css']
})
export class PropertComponent implements OnInit {

nome:string = "Henrique Vassiliou"
idade:number = 16
possuiCarro:Boolean = false
imagem:string = "https://iconape.com/wp-content/files/kg/370538/svg/angular-logo-icon-png-svg.png"

  constructor() { }

  ngOnInit(): void {
  }

}
