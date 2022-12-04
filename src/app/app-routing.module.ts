import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rotas } from 'src/utils/routes';
import { CriaEventoComponent } from './cria-evento/cria-evento.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [{
  path:rotas.home, component: HomePageComponent
},
{
  path: rotas.criaEvento, component: CriaEventoComponent
},
{
  path: rotas.login, component: LoginComponent
},
{
  path: rotas.criarConta, component: CreateAccountComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
