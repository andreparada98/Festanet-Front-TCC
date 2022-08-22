import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
