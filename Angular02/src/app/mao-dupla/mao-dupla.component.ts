import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {

  curso:string = "Angular"
  numero01!: number
  numero02!: number
  resultado!: number

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.curso = "Merendar"
    }, 15000);
  }

  somar() {
    this.resultado = this.numero01 + this.numero02

    return this.resultado
  }
}