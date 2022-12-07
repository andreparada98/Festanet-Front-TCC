import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEventoComponent } from './view-evento.component';
import { ViewEventoService } from './view-evento.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    ViewEventoComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  providers:[
    ViewEventoService
  ]
})
export class ViewEventoModule {}