import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriaEventoComponent } from './cria-evento.component';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    CriaEventoComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CriaEventoComponent
  ]
})
export class CriaEventoModule { }
