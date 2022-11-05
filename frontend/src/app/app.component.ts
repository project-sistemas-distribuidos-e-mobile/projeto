import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';
import { Router } from '@angular/router';
import api from 'src/services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  usuario$ = this.authService.usuarioAtual$;
  
  pagina: number = 1;
  constructor(public authService: AuthService, private router: Router){}
  
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['login']);
    })
  }

  public home(){
    api.post(`/home/${this.pagina}`, this.pagina++)
    .then(response => {
    })
    .catch(error => console.log(error));
  }

  public procurar(nome: string){
    api.post(`/pesquisa/${nome}`, nome)
    .then(response => {
    })
    .catch(error => console.log(error));
  }
}