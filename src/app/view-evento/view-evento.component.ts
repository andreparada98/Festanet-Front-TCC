import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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
  ) { 
  }
  
  ngOnInit(): void {
    this.viewEventoService.openFesta().subscribe(dados => {
      this.festa = Object.assign(
        dados,
        {photoUrl: `${environment.api}/festas/downloadPhotoFesta/${dados.id}`}
        )
    })
    
  }

  voltar(){
    this.router.navigate([''])
  }

  comprar(){
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if(currentUser && currentUser.token){
      const callBackUrl = this.viewEventoService.comprarIngresso(this.festa.id)
      if(callBackUrl){
        window.open('http://google.com')
      }
    }
    else {
      this.router.navigate(['/login'])
    }
  }

}
