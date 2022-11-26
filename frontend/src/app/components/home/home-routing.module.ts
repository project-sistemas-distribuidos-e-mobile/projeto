import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { TituloComponent } from '../titulo/titulo.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':categoria/:id', component: TituloComponent},
  {path: 'resultados/:nome', component: PesquisaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
