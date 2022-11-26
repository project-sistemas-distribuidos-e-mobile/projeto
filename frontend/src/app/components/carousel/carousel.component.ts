import { Component, OnInit } from '@angular/core';
import { Poster } from 'src/models/Poster';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  posters: Poster[] = [];
  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getFilmes().then(response => {
      for(let i = 0; i<3; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
    });

    this.fetchService.getSeries().then(response => {
      for(let i = 0; i<3; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
    });

    this.fetchService.getAnimacoes().then(response => {
      for(let i = 0; i<3; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
    });

    this.fetchService.getJogos().then(response => {
      for(let i = 0; i<3; i++){
        const poster = new Poster();
        poster.url = response.data[i].background_image;
        poster.nome = response.data[i].nome;
        this.posters.push(poster);
      }
    });
  }
}
