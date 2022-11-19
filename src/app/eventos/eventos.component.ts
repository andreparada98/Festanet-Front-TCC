import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { festaModel } from '../cria-evento/cria-evento.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  apiUrl: string = 'http://localhost:3000'
  festas: festaModel
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get<festaModel>(`${this.apiUrl}/festas`).subscribe(res =>{
      this.festas = res
      console.log(this.festas)
    },
    erro => {
      if(erro.status == 400){
        console.log(erro)
      }
    }
    )
  }

}
