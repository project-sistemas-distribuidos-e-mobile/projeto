import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  usuario$ = this.authservice.usuarioAtual$; 

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

}
