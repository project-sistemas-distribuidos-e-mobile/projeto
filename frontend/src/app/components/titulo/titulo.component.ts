import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Titulo } from 'src/models/Titulo';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  filme: Titulo = new Titulo;
  constructor() { }

  ngOnInit(): void {
    api.get('/filme')
    .then(response => {
      console.log(response.data);
      this.filme = response.data;
    }).catch(error => console.log(error));
  }

}
