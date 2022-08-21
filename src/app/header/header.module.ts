import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
