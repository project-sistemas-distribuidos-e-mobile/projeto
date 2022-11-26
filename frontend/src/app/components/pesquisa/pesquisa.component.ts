import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Data } from 'src/models/Data';
import { Jogo } from 'src/models/Jogo';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  resultados_filme: Data[] = [];
  resultados_serie: Data[] = [];
  resultados_jogo: Jogo[] = [];
  
  constructor(private router: Router, private fetchService: FetchService) { }
  
  abrirFilme(id: number){
    this.fetchService.postFilme(id);
  }
  
  abrirSerie(id: number){
    this.fetchService.postSerie(id);
  }

  abrirJogo(id: number){
    this.fetchService.postJogo(id);
  }


  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this.fetchService.getFilmeByName()
    .then(response => {
      this.resultados_filme = response.data;
    });

    this.fetchService.getSerieByName()
    .then(response => {
      this.resultados_serie = response.data;
    });

    this.fetchService.getJogoByName()
    .then(response => {
      this.resultados_jogo = response.data;
    });
  }
}
