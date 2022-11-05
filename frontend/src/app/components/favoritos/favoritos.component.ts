import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { FavService } from '../titulo/fav.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  usuario$ = this.authservice.usuarioAtual$; 

  abrirFavoritos(id: any){
    this.favService.get(id);
  }
  constructor(private authservice: AuthService, private favService: FavService) { }

  ngOnInit(): void {
  }

}
