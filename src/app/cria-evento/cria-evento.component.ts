import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { festaModel } from './cria-evento.model';

@Component({
  selector: 'app-cria-evento',
  templateUrl: './cria-evento.component.html',
  styleUrls: ['./cria-evento.component.scss']
})
export class CriaEventoComponent implements OnInit {
item: festaModel
form: FormGroup
apiUrl: string = 'http://localhost:3000'
  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {
    this.item = new festaModel()
   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = this.formBuilder.group({
      nome_festa: [this.item.nome_festa, [Validators.required, Validators.minLength(3)]],
      data_festa: [this.item.data_festa, [Validators.required, Validators.minLength(3)]],
      qtd_ingressos: [this.item.qtd_ingressos, [Validators.required]],
      description: [this.item.description, [Validators.required,Validators.maxLength(200)]]
    });
  }


  salvar(){
    const currentUser = JSON.parse(localStorage.getItem('user'))
    console.log(currentUser)
    this.item = Object.assign(this.item, this.form.value, {"organizador_id":currentUser.id})
    console.log(this.item)
    this.http.post<festaModel>(`${environment.api}/festas`, this.item).subscribe(res =>{
      console.log(res)
    },
    erro => {
      if(erro.status == 400){
        console.log(erro)
      }
    }
    )
  }

  voltar(){
    this.router.navigate([''])
  }
}
