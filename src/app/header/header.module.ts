import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header.component';
import { SidebarModule } from './sidebar/sidebar.module';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    FileUploadModule,
    HttpClientModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
