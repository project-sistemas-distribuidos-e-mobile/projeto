import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Usuario } from 'src/models/Usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario;
  constructor(
    private authservice: AuthService, 
    private router: Router,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.usuario);
    if(this.usuario.email != '' && this.usuario.senha != ''){
      this.authservice.login(this.usuario).pipe(
        this.toast.observe({
          success: 'Logado com sucesso!',
          loading: 'Fazendo login...',
          error: 'Infelizmente houve um erro, tente novamente.'
        })
      ).subscribe(() => {
        this.router.navigate(['/']);
      })
    } else{
      return;
    }
  }
  
}
