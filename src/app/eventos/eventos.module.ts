import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    EventosComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports:[EventosComponent]
})
export class EventosModule { }
