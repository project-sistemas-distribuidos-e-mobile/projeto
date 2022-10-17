import { Component, OnInit } from '@angular/core';
import api from '../../../src/services/api';
import { MovieModel } from 'src/models/MovieModel';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  movies: MovieModel[] = [];
  constructors() { }
  
  ngOnInit():void {
    api.get('/filmes')
    .then(response => {
      const data = response.data;
      data.forEach((element:any) => {
        const movie = new MovieModel();
        movie.title = element.title;
        movie.language = element.language;
        movie.overview = element.overview;
        movie.poster = element.poster;
        movie.rate = element.rate;
        movie.release = element.release;
        movie.genre = element.genre;
        movie.bg_poster = element.bg_poster;
        this.movies.push(movie);
      });
    }).catch(error => console.log(error))  
  }
}