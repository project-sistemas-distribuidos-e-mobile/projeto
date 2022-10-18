import { Router } from "express";

const routes = Router();

import FilmesController from './controllers/FilmesController'

routes.get('/filmes', FilmesController.getMovies);
routes.get('/series', FilmesController.getTvShows);
routes.get('/animation', FilmesController.getAnimations);
routes.get('/games', FilmesController.getGames);

export default routes;