import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewIngressoComponent } from './view-ingresso.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CardModule } from 'primeng/card';
import { ViewIngressoService } from './view-ingresso.service';


@NgModule({
  declarations: [
    ViewIngressoComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    CardModule
  ],
  providers:[
    ViewIngressoService
  ]
})
export class ViewIngressoModule { }
