import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Titulo } from 'src/models/Titulo';
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
  usuario$ = this.authservice.usuarioAtual$;

  favoritar(userid: any, id: number){
    this.favService.post(userid, id);
    this.favorito = !this.favorito;
  }
  
  remover(){
    this.favorito = !this.favorito;
  }
  constructor(private router: Router, public authservice: AuthService, private favService: FavService) { }

  ngOnInit(): void {
    const dividi = this.router.url.replace("/titulo/", "").split('/');
    const route = dividi[0];
    if(route == 'filmes'){
      api.get('/filme')
      .then(response => {
        this.filme = response.data;
        console.log(this.filme);
      }).catch(error => console.log(error));
    }
    if(route == 'series'){
      api.get('/serie')
      .then(response => {
        this.filme = response.data;
        console.log(this.filme);
      }).catch(error => console.log(error));
    }
    if(route == 'animacoes'){
      api.get('/animacao')
      .then(response => {
        this.filme = response.data;
        console.log(this.filme);
      }).catch(error => console.log(error));
    }
   }

}
