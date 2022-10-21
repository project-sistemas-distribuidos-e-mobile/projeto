import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';
import { Data } from 'src/models/Data';
import { Jogo } from 'src/models/Jogo';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  resultados_filme: Data[] = [];
  resultados_serie: Data[] = [];
  resultados_jogo: Jogo[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/res/filme')
    .then(response => {
      this.resultados_filme = response.data;
      console.log(this.resultados_filme);
    }).catch(error => console.log(error));

    api.get('/res/serie')
    .then(response => {
      this.resultados_serie = response.data;
      console.log(this.resultados_serie);
    }).catch(error => console.log(error));

    api.get('/res/jogo')
    .then(response => {
      this.resultados_jogo = response.data;
      console.log(this.resultados_jogo);
    }).catch(error => console.log(error));
  }

}
