import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  constructor() { }

  async post(key: any, favorito: number){
    axios.post(environment.firebase.databaseURL + `/usuarios/${key}/.json`, favorito)
    .then(response => {
      console.log(response);
    })
    .catch(erro => console.log(erro)
    );
  }
  
  get(key: any){
    axios.get(environment.firebase.databaseURL + `/usuarios/${key}/.json`)
    .then(response => {
      console.log(response.data);
    })
    .catch(erro => console.log(erro)
    );
  }

  //ADICIONAR MODO DE UPDATE PARA FAVORITOS;
  //ADICONAR OPÇÃO DE DELETE;
  //HABILITAR FAVORITO NA PARTE DE JOGOS;
  //FAZER AS REQUISIÇÕES NA VISÃO DE FAVORITOS;
}
