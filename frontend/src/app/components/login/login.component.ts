import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });
  usuario: Usuario = new Usuario;

  constructor(
    private authservice: AuthService, 
    private router: Router,
    private toast: HotToastService
    ) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get senha(){
    return this.loginForm.get('senha');
  }

  login(){
    if(!this.loginForm.valid){
      return;
    }
    this.usuario.email = this.loginForm.value['email'];
    this.usuario.senha = this.loginForm.value['senha'];
    this.authservice.login(this.usuario).pipe(
      this.toast.observe({
        success: 'Logado com sucesso!',
        loading: 'Fazendo login...',
        error: 'Infelizmente houve um erro, tente novamente.'
      })
    ).subscribe(() => {
      this.router.navigate(['/']);
    })
    
  }
  
}
