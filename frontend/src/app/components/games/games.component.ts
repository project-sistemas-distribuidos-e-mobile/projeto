import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/models/Jogo';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  jogos: Jogo[] = [];
  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getJogos().then(response => {
      this.jogos = response.data;
    })
  }
  
  abrirJogo(id: number){
    this.fetchService.postJogo(id);
  }
}
