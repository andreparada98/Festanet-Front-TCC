import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  item: loginModel
  submitted = false;
  apiUrl: string = 'http://localhost:3000'


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { 
    this.item = new loginModel()
  }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = this.formBuilder.group({
      email: [this.item.email, [Validators.required, Validators.minLength(3)]],
      password: [this.item.password, [Validators.required, Validators.minLength(3)]],
    });
  }

  redirect(rota: string){
    this.router.navigate([rota])
  }

  entrar(){
    this.submitted = true 
    this.item = Object.assign(this.item, this.form.value)
    if(this.form.invalid){
      return
    }
    this.http.post<loginModel>(`${this.apiUrl}/auth`, this.item).subscribe(res=> {
      delete res.password
      localStorage.setItem('user', JSON.stringify(res))
      this.router.navigate([''])

      return res.email
    })

  }
}
