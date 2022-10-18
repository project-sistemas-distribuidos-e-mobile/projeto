import { Component, OnInit } from '@angular/core';
import api from '../../../src/services/api';
import { Poster } from 'src/models/PostersModel';

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
      const data = response.data;
      for(let i = 0; i<= 2; i++){
        const poster = new Poster();
        poster.url = data[i].bg_poster;
        poster.title = data[i].title;
        this.posters.push(poster);
      }
    }).catch(error => console.log(error));

    api.get('/series')
    .then(response => {
      const data = response.data;
      for(let i = 0; i<= 2; i++){
        const poster = new Poster();
        poster.url = data[i].bg_poster;
        poster.title = data[i].title;
        this.posters.push(poster);
      }
    }).catch(error => console.log(error));

    api.get('/animation')
    .then(response => {
      const data = response.data;
      for(let i = 0; i<= 1; i++){
        const poster = new Poster();
        poster.url = data[i].bg_poster;
        poster.title = data[i].title;
        this.posters.push(poster);
      }
    }).catch(error => console.log(error));


    api.get('/games')
    .then(response => {
      const data = response.data;
      for(let i = 0; i<= 1; i++){
        const poster = new Poster();
        poster.url = data[i].cover_url.replace("cover_big", "screenshot_big");
        poster.title = data[i].name;
        this.posters.push(poster);
      }
    }).catch(error => console.log(error));
  }

}
