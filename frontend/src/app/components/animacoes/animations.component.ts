import { Component, OnInit } from '@angular/core';
import { Data } from 'src/models/Data';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {
  animacoes: Data[] = [];

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getAnimacoes().then(response => {
      this.animacoes = response.data;
    })
  }
  abrirAnimacao(id: number){
    this.fetchService.postSerie(id);
  }

}
