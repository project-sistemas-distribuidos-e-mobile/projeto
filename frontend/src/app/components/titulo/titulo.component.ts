import { Component, OnInit } from '@angular/core';
import api from '../../../services/api';
import { Titulo } from 'src/models/Titulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  filme: Titulo = new Titulo();
  constructor(private router: Router) { }

  ngOnInit(): void {
    const dividi = this.router.url.replace("/titulo/", "").split('/');
    const route = dividi[0];
    console.log(route);
    if(route == 'filmes'){
      api.get('/filme')
      .then(response => {
        this.filme = response.data;
      }).catch(error => console.log(error));
    }
    if(route == 'series'){
      api.get('/serie')
      .then(response => {
        this.filme = response.data;
      }).catch(error => console.log(error));
    }
    if(route == 'animacoes'){
      api.get('/animacao')
      .then(response => {
        this.filme = response.data;
      }).catch(error => console.log(error));
    }
   }
}
