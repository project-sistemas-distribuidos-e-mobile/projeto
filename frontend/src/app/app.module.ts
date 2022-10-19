import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { SeriesComponent } from './components/series/series.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { GamesComponent } from './components/games/games.component';
import { FooterComponent } from './components/footer/footer.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { HomeComponent } from './components/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
