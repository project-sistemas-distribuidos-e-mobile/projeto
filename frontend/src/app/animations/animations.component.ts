import { Component, OnInit } from '@angular/core';
import api from '../../../src/services/api';
import { AnimationModel } from 'src/models/AnimationModel';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {
  animations: AnimationModel[] = [];

  constructor() { }

  ngOnInit(): void {
    api.get('/animation')
    .then(response => {
      const data = response.data;
      data.forEach((element:any) => {
        const animation = new AnimationModel();
        animation.title = element.title;
        animation.overview = element.overview;
        animation.release_date = element.release_date;
        animation.language = element.language;
        animation.rate = element.rate;
        animation.genre = element.genre;
        animation.poster = element.poster;
        animation.bg_poster = element.bg_poster;
        this.animations.push(animation);
      });
    }).catch(error => console.log(error))  
  }

}
