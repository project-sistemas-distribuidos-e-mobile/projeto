"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagina = exports.categoria = exports.id = exports.busca = exports.routes = void 0;
const express_1 = require("express");
const FilmesController_1 = __importDefault(require("./controllers/FilmesController"));
const AnimacoesController_1 = __importDefault(require("./controllers/AnimacoesController"));
const SeriesController_1 = __importDefault(require("./controllers/SeriesController"));
const JogosControllers_1 = __importDefault(require("./controllers/JogosControllers"));
const routes = (0, express_1.Router)();
exports.routes = routes;
let busca = 'safe-guard';
exports.busca = busca;
let id = '9999';
exports.id = id;
let categoria = '';
exports.categoria = categoria;
let pagina = '1';
exports.pagina = pagina;
routes.get('/', (req, res)=>{
    res.json({"teste": "chegou"});
})
routes.post('/home/:page', (req, res) => {
    exports.pagina = pagina = req.params['page'];
});
//Rotas da home
routes.get('/filmes', FilmesController_1.default.buscarFilmes);
routes.get('/series', SeriesController_1.default.buscarSeries);
routes.get('/animacoes', AnimacoesController_1.default.buscarAnimacoes);
routes.get('/jogos', JogosControllers_1.default.buscarJogos);
//Rotas para pequisa por nome
routes.post('/pesquisa/:nome', (req, res) => {
    exports.busca = busca = req.params['nome'];
    exports.busca = busca = busca.replaceAll('%20', '+');
    res.status(200).send({ "status": "received" });
});
routes.get('/res/filme', FilmesController_1.default.buscarFilmePorNome);
routes.get('/res/serie', SeriesController_1.default.buscarSeriePorNome);
routes.get('/res/jogo', JogosControllers_1.default.buscarJogoPorNome);
//Rotas para conteudo especifico
routes.post('/titulo/:categoria/:id', (req, res) => {
    exports.categoria = categoria = req.params['categoria'];
    exports.id = id = req.params['id'];
    res.status(200).send({ "status": "received" });
});
routes.get('/filme', FilmesController_1.default.buscarFilmePorId);
routes.get('/serie', SeriesController_1.default.buscarSeriePorId);
routes.get('/jogo', JogosControllers_1.default.buscarJogoPorId);
