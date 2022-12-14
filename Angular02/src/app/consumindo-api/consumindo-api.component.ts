import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {

  pokemon!:string

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }
  
  buscar():void{
    this.service.quemEhEssePoke(this.pokemon)
    .pipe(
      catchError(
        (error)=>{
          return of ({msg:"Deu ruim! AAAAA"})
        }
      )
    )

    .subscribe((response)=>{
      console.log("Processando... ", response);
      
    })
  }

  types():void{
    this.service.quaisTipos()
    .pipe(
      catchError(
        (error)=>{
          return of ({msg:"Deu ruim! AAAAA"})
        }
      )
    )

    .subscribe((response)=>{
      console.log("Processando... ", response);
      
    })
  }

}
