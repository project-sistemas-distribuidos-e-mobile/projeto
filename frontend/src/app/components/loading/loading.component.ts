import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent{

  constructor(public loadingService: LoadingService) { }

}
