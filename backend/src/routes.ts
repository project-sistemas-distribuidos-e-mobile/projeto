import { Router } from "express";

const routes = Router();

import FilmesController from './controllers/FilmesController'
import Home from './controllers/Home'

routes.get('/', Home)
routes.get('/filmes', FilmesController.getMovies);
routes.get('/series', FilmesController.getTvShows);
routes.get('/animation', FilmesController.getAnimations);

export default routes;