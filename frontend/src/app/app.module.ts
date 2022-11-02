import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { SeriesComponent } from './components/series/series.component';
import { AnimationsComponent } from './components/animacoes/animations.component';
import { GamesComponent } from './components/games/games.component';
import { FooterComponent } from './components/footer/footer.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { HomeComponent } from './components/home/home.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { TituloJogoComponent } from './components/titulo-jogo/titulo-jogo.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './components/login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SearchBarComponent,
    FilmesComponent,
    SeriesComponent,
    AnimationsComponent,
    GamesComponent,
    FooterComponent,
    PesquisaComponent,
    HomeComponent,
    TituloComponent,
    TituloJogoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
