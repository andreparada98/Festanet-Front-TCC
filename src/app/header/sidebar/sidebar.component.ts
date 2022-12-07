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
             label:'Crie sua conta',
             icon:'pi pi-fw pi-user',
             command: () => this.goTo('criar-conta')
          },
          {
             label:'Visualizar Ingressos',
             icon:'pi pi-ticket',
             command: () => this.goTo('view-ingresso')
          },
          {
             label:'Eventos',
             icon:'pi pi-fw pi-calendar',
             command: () => this.goTo('')
          },
          {
            label:'Logar',
            icon: 'pi pi-upload',
            command: () => this.goTo('login')
          }
      ];
  }    

    goTo(rota:string){
    this.router.navigate([rota])
  }

}
