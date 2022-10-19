import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'titulo', component: PesquisaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
