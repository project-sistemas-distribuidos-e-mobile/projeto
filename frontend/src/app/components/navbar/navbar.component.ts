import { Component, OnInit } from '@angular/core';
import api from 'src/services/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pagina: number = 2;
  constructor() { }

  ngOnInit(): void {
  }

  public home(){
    api.post(`/home/${this.pagina}`, this.pagina++)
    .then(response => {
    })
    .catch(error => console.log(error));
  }

}
