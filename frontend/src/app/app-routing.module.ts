import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NotfoundComponent } from './components/notfound/notfound.component';

const redirecionarParaLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'favoritos/:id', component: FavoritosComponent, ...canActivate(redirecionarParaLogin)},
  {path: '**', component: NotfoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
