import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    CreateAccountComponent
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
  exports:[
    CreateAccountComponent
  ]
})
export class CreateAccountModule { }
