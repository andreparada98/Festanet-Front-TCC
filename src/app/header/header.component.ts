import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  usuarioLogado;

  constructor(
    private router: Router
  ) { 
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if(currentUser && currentUser.token){
      this.usuarioLogado = true
    }
  }

  goTo(rota:string){
    if(rota == 'cria-evento' || rota == 'view-ingresso'){
      const currentUser = JSON.parse(localStorage.getItem('user'))
      if(currentUser && currentUser.token){
        this.router.navigate([rota])
      } else {
        this.router.navigate(['/login'])
      }
    } 
    else {
      this.router.navigate([rota])

    }
  }

  logout(){
    localStorage.removeItem('user');
    this.usuarioLogado = false
    this.router.navigate([''])
  }
}
