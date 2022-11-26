import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/models/Titulo';
import { TituloJogo } from 'src/models/TituloJogo';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { FavService } from './fav.service';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  favorito = true ? this.router.url.includes('true') : false; 
  filme: Titulo = new Titulo();
  jogo: TituloJogo = new TituloJogo();
  usuario$ = this.authservice.usuarioAtual$;
  categoria: string = '';

  //Função que envia dados para o serviço de Favoritar
  favoritar(id: any, data:any){
    this.favorito = !this.favorito;
    this.favService.post(id, {
      id: data[0],
      nome: data[1],
      poster: data[2],
      categoria: this.categoria,
    });
  }
  constructor(private router: Router, private authservice: AuthService, private favService: FavService, private fetchService: FetchService) { }

  ngOnInit(): void {
    const dividi = this.router.url.split('/');
    const route = dividi[1];
    this.categoria = route;     
    if(route == 'filme'){
      this.fetchService.getFilme().then(response => {
        this.filme = response.data;
      })
    }
    if(route == 'serie'){
      this.fetchService.getSerie().then(response => {
        this.filme = response.data;
      })
    }
    if(route == 'jogo'){
      this.fetchService.getJogo().then(response => {
        this.jogo = response.data;
        console.log(this.jogo);
      })
   }
    
  }
}
