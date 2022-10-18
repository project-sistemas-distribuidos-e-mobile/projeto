import { Component, OnInit } from '@angular/core';
import api from '../../../src/services/api';
import { GameModel } from 'src/models/GameModel';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: GameModel[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/games')
    .then(response => {
      const data = response.data;
      data.forEach((element:any) => {
        const game = new GameModel();
        game.name = element.name;
        game.age_ratings = element.age_ratings;
        game.aggregated_rating = element.aggregated_rating;
        game.alternative_names = element.alternative_names;
        game.artworks = element.artworks;
        game.cover = element.cover;
        game.cover_url = element.cover_url;
        game.first_release_date = element.first_release_date;
        game.genres = element.genres;
        game.involved_companies = element.involved_companies;
        game.language_supports = element.language_supports;
        game.platforms = element.platforms;
        game.rating = element.rating;
        game.storyline = element.storyline;
        game.themes = element.themes;
        game.websites = element.websites;
        game.screenshots = element.screenshots;
        this.games.push(game);
      });
    }).catch(error => console.log(error))  
  }

}
