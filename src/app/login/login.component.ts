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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
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

  voltar(){
    this.router.navigate([''])
  }
}
