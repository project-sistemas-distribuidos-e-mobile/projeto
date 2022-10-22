import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
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
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    api.get('/res/filme')
    .then(response => {
      this.resultados_filme = response.data;
    }).catch(error => console.log(error));

    api.get('/res/serie')
    .then(response => {
      this.resultados_serie = response.data;
    }).catch(error => console.log(error));

    api.get('/res/jogo')
    .then(response => {
      this.resultados_jogo = response.data;
    }).catch(error => console.log(error));
  }

  
}
