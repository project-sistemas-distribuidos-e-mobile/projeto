import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';
import { Router } from '@angular/router';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  usuario$ = this.authService.usuarioAtual$;
  
  pagina: number = 1;
  constructor(public authService: AuthService, private router: Router, private fetchService: FetchService){}
  
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['login']);
    })
  }

  public home(){
    this.fetchService.postHome(this.pagina++);
  }

  public procurar(nome: string){
    this.fetchService.postPesquisa(nome);
  }
}