import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authservice.fazerLogin(this.usuario);
  }
  
}
