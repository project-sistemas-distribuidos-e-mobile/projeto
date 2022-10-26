import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { TituloJogo } from 'src/models/TituloJogo';

@Component({
  selector: 'app-titulo-jogo',
  templateUrl: './titulo-jogo.component.html',
  styleUrls: ['./titulo-jogo.component.css']
})
export class TituloJogoComponent implements OnInit {
  jogo: TituloJogo = new TituloJogo;

  constructor() { }

  ngOnInit(): void {
    api.get('/jogo')
      .then(response => {
        this.jogo = response.data;
        console.log('this.jogo', this.jogo);
      }).catch(error => console.log(error));
  }

}
