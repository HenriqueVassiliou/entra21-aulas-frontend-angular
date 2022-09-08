import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
    links!:Array<any>

  constructor() { }

  ngOnInit(): void {
    this.links = new Array();

this.links.push({

rota: "vaiPagina",

textContent: "Ver componente verPagina",

cor: "nav-icon far fa-circle text-success"
})

this.links.push({

rota: "outro",

textContent: "Ver componente outro",

cor: "nav-icon far fa-circle text-danger"
})

this.links.push({

  rota: "propert",
  
  textContent: "Ver componente propert",
  
  cor: "nav-icon far fa-circle text-primary"
  })
  
  this.links.push({

    rota: "event",
    
    textContent: "Ver componente event",
    
    cor: "nav-icon far fa-circle text-white"
    })
    
    this.links.push({

      rota: "mao-dupla",
      
      textContent: "Ver componente mao-dupla",
      
      cor: "nav-icon far fa-circle text-success"
      })

      this.links.push({

        rota: "receber/:info1/:dado2/:teste",
        
        textContent: "Ver componente receber",
        
        cor: "nav-icon far fa-circle text-yellow"
        })

        this.links.push({

          rota: "enviar",
          
          textContent: "Ver componente enviar",
          
          cor: "nav-icon far fa-circle text-gray"
          })

          this.links.push({

            rota: "diretivaIf",
            
            textContent: "Ver componente diretivaIf",
            
            cor: "nav-icon far fa-circle text-purple"
            })

            this.links.push({

              rota: "diretivaFor/:lista",
              
              textContent: "Ver componente diretivaFor",
              
              cor: "nav-icon far fa-circle text-orange"
              })

              this.links.push({

                rota: "login",
                
                textContent: "Ver componente login",
                
                cor: "nav-icon far fa-circle text-orange"
                })

                this.links.push({

                  rota: "consumindo-api",
                  
                  textContent: "Ver componente consumindo-api",
                  
                  cor: "nav-icon far fa-circle text-orange"
                  })
 
  }

}
