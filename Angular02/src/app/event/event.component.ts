import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  resultado!:number
  tamanho:number = 100

  constructor() { }

  ngOnInit(): void {
  }
  minhaFunc() {

    alert("cade o pai do filipe???")
  }
    somar(){
      alert("1+2 = " + (1 + 2))

    }
    subtrair(a: number, b: number)
    {
      alert(`${a}-${b}=${(a-b)}`)
    
    }
    multiplicar(){

      let a:number = Number(prompt ("Informe o primeiro numero"))
      
      let b:number = Number (prompt ("Informe o segundo numero"))
      
      this.resultado = a*b
      
      }
      
      dividir(a: number, b: number){
      
      this.resultado = a/b
    
      }
      aumentar(){
        this.tamanho+=10
      }
      diminuir(){
        this.tamanho-=5
      }

  }
