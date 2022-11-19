import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EventosModule } from './eventos/eventos.module';
import { CriaEventoComponent } from './cria-evento/cria-evento.component';
import { CriaEventoModule } from './cria-evento/cria-evento.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ButtonModule,
    CardModule,
    EventosModule,
    CriaEventoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
