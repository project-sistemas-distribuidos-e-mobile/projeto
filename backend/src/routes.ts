import { Router } from "express";

const routes = Router();
let busca = 'teste';
let filme: string = '';

import FilmesController from './controllers/FilmesController'

routes.get('/filmes', FilmesController.buscarFilmes);
routes.get('/series', FilmesController.buscarSeries);
routes.get('/animacoes', FilmesController.buscarAnimacoes);
routes.get('/jogos', FilmesController.buscarJogos);

routes.post('/pesquisa/:nome', (req, res) => {
    res.status(200).send({"status": "received"});
    busca =  req.url.replace('/pesquisa/', '');
});

routes.post('/movie/:id', (req, res) => {
    filme = req.url.replace('/movie/', '')
    res.status(200).send({"status": "received"});
});

routes.get('/filme', FilmesController.buscarFilmePorId);

routes.get('/res/filme', FilmesController.buscarFilmePorNome);
routes.get('/res/serie', FilmesController.buscarSeriePorNome);
routes.get('/res/jogo', FilmesController.buscarJogoPorNome);

export {routes, busca, filme};