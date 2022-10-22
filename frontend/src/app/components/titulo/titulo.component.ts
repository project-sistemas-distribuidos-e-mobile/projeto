import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Data } from 'src/models/Data';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  resultado: Data = {
    id: 0,
    nome: '',
    data_lancamento: '',
    descricao: '',
    idioma: '',
    nota: 0,
    genero: [],
    imagem: '',
    background_image: ''
  };
  constructor() { }

  ngOnInit(): void {
    api.get('/filmes')
    .then(response => {
      for(let i = 0; i<1; i++){
        console.log(response.data[0]);
        this.resultado.id = response.data[0].id;
        this.resultado.nome = response.data[0].nome;
        this.resultado.data_lancamento = response.data[0].data_lancamento;
        this.resultado.descricao = response.data[0].descricao;
        this.resultado.idioma = response.data[0].idioma;
        this.resultado.nota = response.data[0].nota;
        this.resultado.genero = response.data[0].genero;
        this.resultado.imagem = response.data[0].imagem;
        this.resultado.background_image = response.data[0].background_image;
      }
    }).catch(error => console.log(error));
  }

}
