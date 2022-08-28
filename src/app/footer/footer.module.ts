import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';




@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
