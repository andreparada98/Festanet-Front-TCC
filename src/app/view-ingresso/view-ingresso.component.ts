import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ingresso',
  templateUrl: './view-ingresso.component.html',
  styleUrls: ['./view-ingresso.component.scss']
})
export class ViewIngressoComponent implements OnInit {
  public qrCodeStr: string = null;

  constructor() {
    this.qrCodeStr = 'Some string to generate QR Code';
   }

  ngOnInit(): void {
  }

}
