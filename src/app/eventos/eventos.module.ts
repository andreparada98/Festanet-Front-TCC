import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ViewEventoService } from '../view-evento/view-evento.service';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    EventosComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[EventosComponent],
  providers: [
    ViewEventoService
  ]
})
export class EventosModule { }
