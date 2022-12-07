import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rotas } from 'src/utils/routes';
import { CriaEventoComponent } from './cria-evento/cria-evento.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ViewEventoComponent } from './view-evento/view-evento.component';
import { ViewIngressoComponent } from './view-ingresso/view-ingresso.component';

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
{
  path: rotas.visualizarEvento, component: ViewEventoComponent
},
{
  path: rotas.visualizarIngresso, component: ViewIngressoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
