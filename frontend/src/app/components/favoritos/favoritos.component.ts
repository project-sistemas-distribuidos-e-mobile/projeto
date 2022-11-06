import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { FavService } from '../titulo/fav.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  usuario$ = this.authservice.usuarioAtual$; 
  lista_de_favorito: any[] = [];

  public getFavoritos(id: string){
    const observable = this.favService.get(id);
    observable.subscribe(ls => {
      const entries = Object.entries(ls);
      entries.forEach(entry => {
        const c = entry[1];
        c.id = entry[0];
        this.lista_de_favorito.push(c);
      })
    })
  }

  public deletar(id_user: string, id_node: string){
    this.favService.delete(id_user, id_node);
  }

  constructor(private authservice: AuthService, private favService: FavService, private router: Router) { }

  ngOnInit(): void {
    const id = this.router.url.replace("/favoritos/", "");
    this.getFavoritos(id);
  }

}
