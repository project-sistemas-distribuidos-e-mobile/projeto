import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from '../favoritos/favoritos.component';
import { TituloComponent } from '../titulo/titulo.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':categoria/:id', component: TituloComponent},
  {path: 'user/favoritos/:id', component: FavoritosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
