import { Router } from "express";

const routes = Router();

import FilmesController from './controllers/FilmesController'

routes.get('/filmes', (req, res) => {
    res.send("Rota de filmes");
})

routes.get('/filmes2', FilmesController.getPopularMovies);

export default routes;