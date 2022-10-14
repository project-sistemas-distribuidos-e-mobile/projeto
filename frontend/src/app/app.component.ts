import { Component, OnInit } from '@angular/core';
import api from '../services/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  ngOnInit() {
    // Ao carregar a página faz a requisição ao back-end
    // api.get('/filmes2')
    //   .then(response => {
    //     console.log(response);
    //   }).catch(error => console.log(error));
  }
}