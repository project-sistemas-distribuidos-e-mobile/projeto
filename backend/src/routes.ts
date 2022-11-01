import { Router } from "express";
import FilmesController from './controllers/FilmesController';
import AnimacoesController from "./controllers/AnimacoesController";
import SeriesController from "./controllers/SeriesController";
import JogosControllers from "./controllers/JogosControllers";

const routes = Router();
let busca: string = '';
let id: string = '';

//Rotas da home
routes.get('/filmes', FilmesController.buscarFilmes);
routes.get('/series', SeriesController.buscarSeries);
routes.get('/animacoes', AnimacoesController.buscarAnimacoes);
routes.get('/jogos', JogosControllers.buscarJogos);

//Rotas para pequisa por nome
routes.post('/pesquisa/:nome', (req, res) => {
    busca =  req.url.replace('/pesquisa/', '');
    busca = busca.replaceAll('%20', '+');
    res.status(200).send({"status": "received"});
});
routes.use((req, res, next) => {
    if(busca != ''){
        next();
    } else{
        res.status(400).send('Please insert your query');
    }
});
routes.get('/res/filme', FilmesController.buscarFilmePorNome);
routes.get('/res/serie', SeriesController.buscarSeriePorNome);
routes.get('/res/jogo', JogosControllers.buscarJogoPorNome);


//Rotas para conteudo especifico
routes.post('/titulo/:id', (req, res) => {
    id = req.url.replace('/titulo/', '');
    res.status(200).send({"status": "received"});
});

routes.use((req, res, next) => {
    if(id != ''){
        next();
    } else{
        res.status(400).send("Please select a show before try to see it's informations");
    }
});
routes.get('/filme', FilmesController.buscarFilmePorId);
routes.get('/serie', SeriesController.buscarSeriePorId);
routes.get('/animacao', AnimacoesController.buscarAnimacaoPorId);
routes.get('/jogo', JogosControllers.buscarJogoPorId);


export {routes, busca, id};