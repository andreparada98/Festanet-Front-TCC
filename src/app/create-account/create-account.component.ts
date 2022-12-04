import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { accountModel } from './account.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  item: accountModel
  apiUrl: string = 'http://localhost:3000'
  form: FormGroup

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,

  ) { 
    this.item = new accountModel()

  }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = this.formBuilder.group({
      email: [this.item.email, [Validators.required, Validators.email]],
      name: [this.item.name, [Validators.required, Validators.minLength(3)]],
      password: [this.item.password, Validators.required],
    });
  }

  salvar(){
    this.item = Object.assign(this.item, this.form.value)
    console.log(this.item)
    this.http.post<accountModel>(`${this.apiUrl}/users`, this.item).subscribe(res =>{
      console.log(res)
      this.router.navigate([''])
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
