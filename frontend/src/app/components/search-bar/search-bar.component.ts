import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public procurar(nome: string){
    api.post(`/pesquisa/${nome}`, nome)
    .then(response => {
    })
    .catch(error => console.log(error));
  }
  constructor() { }

  ngOnInit(): void {
  }
}
