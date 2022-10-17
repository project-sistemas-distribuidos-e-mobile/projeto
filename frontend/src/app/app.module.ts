import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
import { AnimationsComponent } from './animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SearchBarComponent,
    FilmesComponent,
    SeriesComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
