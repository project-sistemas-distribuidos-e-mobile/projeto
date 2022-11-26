import { Component, OnInit } from '@angular/core';
import { Data } from 'src/models/Data';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Data[] = [];
  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getSeries().then(response => {
      this.series = response.data;
    })
  }

  abrirSerie(id: number){
    this.fetchService.postSerie(id);
  }
}
