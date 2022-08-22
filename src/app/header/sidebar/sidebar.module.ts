import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SlideMenuModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
