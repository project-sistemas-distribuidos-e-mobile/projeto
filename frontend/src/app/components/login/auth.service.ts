import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { Usuario } from 'src/models/Usuario';
import api from 'src/services/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.email != '' && usuario.senha != ''){
      api.post(`/login?user=${usuario.email}&password=${CryptoJS.MD5(usuario.senha).toString()}`);
      this.usuarioAutenticado = true;
      // this.router.navigate(['/']);
    } else{
      this.usuarioAutenticado = false
    }
  }
}
