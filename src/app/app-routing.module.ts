import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rotas } from 'src/utils/routes';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{
  path:rotas.home, component: HomePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
