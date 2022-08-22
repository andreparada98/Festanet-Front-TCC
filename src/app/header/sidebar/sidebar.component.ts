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
             label:'Criar Evento',
             icon:'pi pi-fw pi-file'
          },
          {
             label:'Parceiros',
             icon:'pi pi-fw pi-pencil',
          },
          {
             label:'Usuários',
             icon:'pi pi-fw pi-user',
          },
          {
             label:'Eventos',
             icon:'pi pi-fw pi-calendar',
          },
      ];
  }    

}
