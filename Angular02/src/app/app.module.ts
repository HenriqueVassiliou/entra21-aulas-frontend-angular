import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertComponent } from './propert/propert.component';
import { EventComponent } from './event/event.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { SegurancaService } from "./seguranca.service";
import { DiretivasModule } from "./diretivas/diretivas.module";
import { HttpClientModule } from "@angular/common/http";
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    PropertComponent,
    EventComponent,
    MaoDuplaComponent,
    MenuComponent,
    HeaderComponent,
    ReceberDadosComponent,
    EnviarComponent,
    LoginComponent,
    ConsumindoApiComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DiretivasModule,
    HttpClientModule
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
