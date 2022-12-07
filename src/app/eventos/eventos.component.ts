import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { festaModel } from '../cria-evento/cria-evento.model';
import { ViewEventoService } from '../view-evento/view-evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  apiUrl: string = 'http://localhost:3000'
  festas: festaModel
  festaId
  constructor(
    private http: HttpClient,
    private router: Router,
    private viewEvento: ViewEventoService
  ) { }

  ngOnInit(): void {
    this.http.get<any>(`${environment.api}/festas`).subscribe(res => {
      this.festas = res
    })
  }

  handleReadMore(link: string) {
    this.viewEvento.festId = parseInt(link, 10)
   this.router.navigate(['view-evento'])
  }
  
}
