import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
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
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
