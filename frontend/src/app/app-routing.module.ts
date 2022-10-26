import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { TituloJogoComponent } from './components/titulo-jogo/titulo-jogo.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resultados/:nome', component: PesquisaComponent},
  {path: 'titulo/:tipo/:id', component: TituloComponent}, 
  {path: 'titulo/:id', component: TituloJogoComponent}, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
