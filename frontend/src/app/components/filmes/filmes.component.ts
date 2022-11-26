import { Component, OnInit } from '@angular/core';
import { Data } from 'src/models/Data';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Data[] = [];
  constructor(private fetchService: FetchService) { }
  
  ngOnInit():void {
    this.fetchService.getFilmes().then(response => {
      this.filmes = response.data;
    })
  }

  abrirFilme(id: number){
    this.fetchService.postFilme(id);
  }
}