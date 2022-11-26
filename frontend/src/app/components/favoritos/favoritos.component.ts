import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/services/fetch.service';
import { AuthService } from '../login/auth.service';
import { FavService } from '../titulo/fav.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  usuario$ = this.authservice.usuarioAtual$; 
  lista_de_favorito: any[] = [];

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url :urlToNavigateTo;
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
     })
   })
  }

  public getFavoritos(id: string){
    const observable = this.favService.get(id);
    observable.subscribe(ls => {
      const entries = Object.entries(ls);
      entries.forEach(entry => {
        const c = entry[1];
        c.uid = entry[0];
        this.lista_de_favorito.push(c);        
      })
    })
  }

  public deletar(id_user: string, id_node: string){
    const observable = this.favService.delete(id_user, id_node);
    observable.subscribe(response => {
      console.log("Favorito removido!" + response);
      this.reloadComponent(true);
    });
  };

  public abrirFavorito(categoria: string, id: number){
    if(categoria == 'filme'){
      this.fetchService.postFilme(id)
      .then(() => {
        this.router.navigate([`/${categoria}/${id}`, {favorito: true}] );
      });
    }
    if(categoria == 'serie'){
      this.fetchService.postSerie(id)
      .then(() => {
        this.router.navigate([`/${categoria}/${id}`, {favorito: true}]);
      });
    }
    if(categoria == 'jogo'){
      this.fetchService.postJogo(id)
      .then(() => {
        this.router.navigate([`/${categoria}/${id}`, {favorito: true}]);
      });
    }
  }

  constructor(private authservice: AuthService, private favService: FavService, private router: Router, private fetchService: FetchService) { }

  ngOnInit(): void {
    const id = this.router.url.replace("user/favoritos/", "");
    this.getFavoritos(id);
  }

}
