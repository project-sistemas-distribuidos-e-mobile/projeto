import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import { Usuario } from 'src/models/Usuario';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtual = authState(this.auth);

  constructor( private auth: Auth ) { }

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
