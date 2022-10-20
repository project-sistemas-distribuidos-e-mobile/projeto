import { Router } from "express";

const routes = Router();
let busca = '';

import FilmesController from './controllers/FilmesController'

routes.get('/filmes', FilmesController.buscarFilmes);
routes.get('/series', FilmesController.buscarSeries);
routes.get('/animacoes', FilmesController.buscarAnimacoes);
routes.get('/jogos', FilmesController.buscarJogos);
routes.post('/titulo/:nome', (req, res) => {
    res.status(200).send({"status": "received"});
    busca =  req.url.replace('/titulo/', '');
});
routes.get('/res', FilmesController.buscaPorNome)
routes.get('/resjogo', FilmesController.buscarJogoPorNome);

export {routes, busca};