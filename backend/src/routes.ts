import { Router } from "express";

const routes = Router();

import FilmesController from './controllers/FilmesController'

routes.get('/filmes', FilmesController.buscarFilmes);
routes.get('/series', FilmesController.buscarSeries);
routes.get('/animacoes', FilmesController.buscarAnimacoes);
routes.get('/jogos', FilmesController.buscarJogos);
routes.get('/nome', FilmesController.buscaPorNome);
routes.get('/nomeJogo', FilmesController.buscarJogoPorNome);

export default routes;