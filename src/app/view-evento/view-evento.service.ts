import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewEventoService {
  
  festId: any;

  constructor(
    private http: HttpClient
  ) { }

  openFesta(){
    return this.http.get<any>(`${environment.api}/festas/${parseInt(this.festId)}`)
  }
}
