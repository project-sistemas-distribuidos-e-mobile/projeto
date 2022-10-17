import { Component, OnInit } from '@angular/core';
import api from '../../../src/services/api';
import { TvShowModel } from 'src/models/TvshowModel';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  shows: TvShowModel[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/series')
    .then(response => {
      const data = response.data;
      data.forEach((element:any) => {
        const show = new TvShowModel();
        show.title = element.title;
        show.release_date = element.release_date;
        show.overview = element.overview;
        show.language = element.language;
        show.rate = element.rate;
        show.genre = element.genre;
        show.poster = element.poster;
        show.bg_poster = element.bg_poster;
        this.shows.push(show);
      });
    }).catch(error => console.log(error))  
  }

}
