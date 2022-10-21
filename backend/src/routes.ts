import { Router } from "express";

const routes = Router();
let busca = 'teste';

import FilmesController from './controllers/FilmesController'

routes.get('/filmes', FilmesController.buscarFilmes);
routes.get('/series', FilmesController.buscarSeries);
routes.get('/animacoes', FilmesController.buscarAnimacoes);
routes.get('/jogos', FilmesController.buscarJogos);
routes.post('/titulo/:nome', (req, res) => {
    res.status(200).send({"status": "received"});
    busca =  req.url.replace('/titulo/', '');
});
routes.get('/res/filme', FilmesController.buscarFilmePorNome);
routes.get('/res/serie', FilmesController.buscarSeriePorNome);
routes.get('/res/jogo', FilmesController.buscarJogoPorNome);

export {routes, busca};