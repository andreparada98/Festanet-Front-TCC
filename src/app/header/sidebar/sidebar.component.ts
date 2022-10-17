import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

   constructor(
      private router: Router
   ){}

  items: MenuItem[] = []

  ngOnInit() {
      this.items = [
          {
             label:'Crie seu Evento',
             icon:'pi pi-plus-circle',
             command: () => this.goTo('cria-evento')
          },
          {
             label:'Parceiros',
             icon:'pi pi-globe',
          },
          {
             label:'Usuários',
             icon:'pi pi-fw pi-user',
          },
          {
             label:'Eventos',
             icon:'pi pi-fw pi-calendar',
          },
          {
            label:'Logar',
            icon: 'pi pi-upload',
            routerLink: ''
          }
      ];
  }    

    goTo(rota:string){
    this.router.navigate([rota])
  }

}
