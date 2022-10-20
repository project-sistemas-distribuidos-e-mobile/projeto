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
  resultados: Data[] = [];
  resultados_jogo: Jogo[] = [];
  constructor() { }

  ngOnInit(): void {
    api.get('/res')
    .then(response => {
      this.resultados = response.data;
      console.log(response.data);
    }).catch(error => console.log(error));


    api.get('/resjogo')
    .then(response => {
      this.resultados_jogo = response.data;
      console.log(response.data);
    }).catch(error => console.log(error));
  }

}
