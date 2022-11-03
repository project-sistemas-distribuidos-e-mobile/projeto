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

  login(usuario: Usuario){
    return from(signInWithEmailAndPassword(this.auth, usuario.email, usuario.senha));
  }

  logout(){
    return from(this.auth.signOut());
  }
}
