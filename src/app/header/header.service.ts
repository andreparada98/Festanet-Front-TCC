import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  usuarioLogado = false;

  constructor(
    private router: Router,
  ) { 
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if(currentUser && currentUser.token){
      this.usuarioLogado = true
    }
  }
  

  goTo(rota:string){
    if(rota == 'cria-evento'){
      const currentUser = JSON.parse(localStorage.getItem('user'))
      if(currentUser && currentUser.token){
        this.router.navigate([rota])
      } else {
        this.router.navigate(['/login'])
      }
    } else {
      this.router.navigate([rota])

    }
  }

  logout(){
    localStorage.removeItem('user');
    this.usuarioLogado = false
    this.router.navigate([''])

  }

}
