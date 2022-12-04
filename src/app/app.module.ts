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
import { CriaEventoModule } from './cria-evento/cria-evento.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateAccountModule } from './create-account/create-account.module';
import { JwtInterceptor } from 'src/helpers/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ButtonModule,
    CardModule,
    EventosModule,
    CriaEventoModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    HttpClientModule,
    CreateAccountModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
