import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { PropertComponent } from './propert/propert.component';

const routes: Routes = [
  {
    path: "vaiPagina",
    component: PaginaComponent
  },
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "outro",
    component: OutroComponent
  },
  {
    path: "propert",
    component: PropertComponent
  },
  {
    path: "event",
    component: EventComponent
  },
  {
    path: "mao-dupla",
    component: MaoDuplaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
