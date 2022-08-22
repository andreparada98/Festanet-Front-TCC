import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  items: MenuItem[] = []

  ngOnInit() {
      this.items = [
          {
             label:'Crie seu Evento',
             icon:'pi pi-plus-circle'
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

}
