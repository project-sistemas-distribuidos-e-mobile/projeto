import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public procurar(nome: string){
    api.post(`/titulo/${nome}`, nome)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  public limpar_pesquisa(){
    return this
  }
  constructor() { }

  ngOnInit(): void {
  }
}
