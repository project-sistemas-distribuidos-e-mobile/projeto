import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, switchMap } from 'rxjs';
import { Usuario } from 'src/models/Usuario';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtual = authState(this.auth);

  constructor( private auth: Auth ) { }

  cadastro(usuario: Usuario){
    return from(createUserWithEmailAndPassword(this.auth, usuario.email, usuario.senha)).pipe(
      switchMap(({user}) => updateProfile(user, {displayName: usuario.nome}))
    );
  }

  login(usuario: Usuario){
    return from(signInWithEmailAndPassword(this.auth, usuario.email, usuario.senha));
  }

  logout(){
    return from(this.auth.signOut());
  }
}
