import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Titulo } from 'src/models/Titulo';
import { TituloJogo } from 'src/models/TituloJogo';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { FavService } from './fav.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  favorito = false;
  filme: Titulo = new Titulo();
  jogo: TituloJogo = new TituloJogo();
  usuario$ = this.authservice.usuarioAtual$;
  categoria: string = '';

  favoritar(id: any, data:any){
    this.favorito = !this.favorito;
    this.favService.post(id, {
      id: data[0],
      nome: data[1],
      poster: data[2],
      categoria: this.categoria,
    });
  }
  constructor(private router: Router, private authservice: AuthService, private favService: FavService) { }

  ngOnInit(): void {
    const dividi = this.router.url.replace("/titulo/", "").split('/');
    const route = dividi[0];
    this.categoria = route;
    this.router.events  
    if(route == 'filmes'){
      api.get('/filme')
      .then(response => {
        this.filme = response.data;
      }).catch(error => console.log(error));
    }
    if(route == 'series'){
      api.get('/serie')
      .then(response => {
        this.filme = response.data;
      }).catch(error => console.log(error));
    }
    if(route == 'jogos'){
      api.get('/jogo')
      .then(response => {
        this.jogo = response.data;
      }).catch(error => console.log(error));
    }
   }

}
