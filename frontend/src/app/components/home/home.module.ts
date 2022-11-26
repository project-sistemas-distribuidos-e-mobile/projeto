import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from '../carousel/carousel.component';
import { FilmesComponent } from '../filmes/filmes.component';
import { SeriesComponent } from '../series/series.component';
import { AnimationsComponent } from '../animacoes/animations.component';
import { GamesComponent } from '../games/games.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FilmesComponent,
    SeriesComponent,
    AnimationsComponent,
    GamesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
