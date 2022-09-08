import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { EnviarComponent } from './enviar/enviar.component';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertComponent } from './propert/propert.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [
  {
    path: "vaiPagina",
    component: PaginaComponent, canActivate:[SegurancaService]
  },
  {
    path: "inicio",
    component: InicioComponent, canActivate:[SegurancaService]
  },
  {
    path: "outro",
    component: OutroComponent, canActivate:[SegurancaService]
  },
  {
    path: "propert",
    component: PropertComponent, canActivate:[SegurancaService]
  },
  {
    path: "event",
    component: EventComponent, canActivate:[SegurancaService]
  },
  {
    path: "mao-dupla",
    component: MaoDuplaComponent, canActivate:[SegurancaService]
  },
  {
    path: "receber/:info1/:dado2/:teste",
    component: ReceberDadosComponent, canActivate:[SegurancaService]

  },
  {
    path: "enviar",
    component: EnviarComponent

  },
  {
    path: "diretivaIf",
    component: DiretivaIfComponent

  },
  {
    path: "diretivaFor/:lista",
    component: DiretivaForComponent

  },
  {
    path: "",
    component: LoginComponent

  },
  {
    path: "consumindo-api",
    component:  ConsumindoApiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
