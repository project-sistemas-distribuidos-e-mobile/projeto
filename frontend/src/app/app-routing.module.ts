import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { TituloJogoComponent } from './components/titulo-jogo/titulo-jogo.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
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
