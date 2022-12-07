import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEventoService } from './view-evento.service';

@Component({
  selector: 'app-view-evento',
  templateUrl: './view-evento.component.html',
  styleUrls: ['./view-evento.component.scss']
})
export class ViewEventoComponent implements OnInit {

  festa: any;

  constructor(
    private viewEventoService: ViewEventoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.viewEventoService.openFesta().subscribe(dados => {
      this.festa = dados
    })
  }

  voltar(){
    this.router.navigate([''])
  }

}
