"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilmeService_1 = __importDefault(require("../services/FilmeService"));
const BuscaService_1 = __importDefault(require("../services/BuscaService"));
const Data_1 = require("../models/Data");
const Titulo_1 = require("../models/Titulo");
exports.default = {
    //Retorna um array de 20 filmes conforme o Modelo
    async buscarFilmes(req, res) {
        let array_de_filmes = [];
        const fetch = new FilmeService_1.default();
        const response = await fetch.getFilmes;
        response.forEach(element => {
            const filme = new Data_1.Data();
            filme.id = element.id;
            filme.nome = element.title;
            filme.descricao = element.overview;
            if (element.poster_path != null) {
                filme.imagem += element.poster_path;
            }
            else {
                filme.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if (element.backdrop_path != null) {
                filme.background_image += element.backdrop_path;
            }
            else {
                filme.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_filmes.push(filme);
        });
        return res.json(array_de_filmes);
    },
    //Retorna um array de 10 filmes buscados pelo nome conforme o Modelo
    async buscarFilmePorNome(req, res) {
        let resultado_pesquisa = [];
        const fetch = new FilmeService_1.default();
        const response = await fetch.getFilmePorName;
        try {
            for (let i = 0; i <= 10; i++) {
                const data = new Data_1.Data();
                data.id = response[i].id;
                data.nome = response[i].title;
                if (response[i].overview == undefined || response[i].overview == '') {
                    data.descricao = "Descrição não encontrada.";
                }
                else {
                    data.descricao = response[i].overview;
                }
                if (response[i].poster_path != null) {
                    data.imagem += response[i].poster_path;
                }
                else {
                    data.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
                }
                resultado_pesquisa.push(data);
            }
        }
        catch (error) {
            console.log(error);
        }
        return res.json(resultado_pesquisa);
    },
    //Retorna 1 filme buscado pelo ID conforme o Modelo
    async buscarFilmePorId(req, res) {
        const filme = new Titulo_1.Titulo();
        const fetch = new BuscaService_1.default();
        const response = await fetch.get;
        filme.id = response.id;
        filme.nome = response.title;
        filme.descricao = response.overview;
        filme.data_lancamento = response.release_date.split('-').reverse().join('-');
        filme.idioma = response.original_language.toUpperCase();
        filme.nota = response.vote_average.toFixed(2);
        if (response.genres.length >= 1) {
            response.genres.forEach(genre => {
                filme.generos.push(genre['name']);
            });
        }
        if (response.production_companies.length >= 1) {
            response.production_companies.forEach(produtora => {
                filme.produtoras.push(produtora['name']);
            });
        }
        filme.poster += response.poster_path;
        filme.bg_poster += response.backdrop_path;
        filme.homepage = response.homepage;
        filme.imdb_id = response.imdb_id;
        return res.json(filme);
    }
};
