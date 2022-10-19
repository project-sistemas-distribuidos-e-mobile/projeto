import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Poster } from 'src/models/Poster';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  posters: Poster[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/filmes')
    .then(response => {
      for(let i = 0; i<3; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
      console.log(this.posters);
    }).catch(error => console.log(error));

    api.get('/series')
    .then(response => {
      for(let i = 0; i<3; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
      console.log(this.posters);
    }).catch(error => console.log(error));

    api.get('/animacoes')
    .then(response => {
      for(let i = 0; i<2; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
      console.log(this.posters);
    }).catch(error => console.log(error));

    api.get('/jogos')
    .then(response => {
      for(let i = 0; i<2; i++){
        const poster = new Poster();
        poster.url = response.data[i].imagem;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
      console.log(this.posters);
    }).catch(error => console.log(error));
  }
}
