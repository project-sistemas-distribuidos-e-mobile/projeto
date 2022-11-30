"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SerieService_1 = __importDefault(require("../services/SerieService"));
const BuscaService_1 = __importDefault(require("../services/BuscaService"));
const Data_1 = require("../models/Data");
const Titulo_1 = require("../models/Titulo");
exports.default = {
    //Retorna um array de 20 seriados conforme o Modelo 
    buscarSeries(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let array_de_series = [];
            const series_model = new SerieService_1.default();
            const response = yield series_model.getSeries;
            response.forEach(element => {
                const serie = new Data_1.Data();
                serie.id = element.id;
                serie.nome = element.name;
                serie.descricao = element.overview;
                if (element.poster_path != null) {
                    serie.imagem += element.poster_path;
                }
                else {
                    serie.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
                }
                if (element.backdrop_path != null) {
                    serie.background_image += element.backdrop_path;
                }
                else {
                    serie.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
                }
                array_de_series.push(serie);
            });
            return res.json(array_de_series);
        });
    },
    //Retorna um array de 10 seriados buscados pelo nome conforme o Modelo
    buscarSeriePorNome(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let resultado_pesquisa = [];
            const fetch = new SerieService_1.default();
            const response = yield fetch.getSeriePorName;
            try {
                for (let i = 0; i < 10; i++) {
                    const data = new Data_1.Data();
                    data.id = response[i].id;
                    data.nome = response[i].name;
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
        });
    },
    //Retorna 1 seriado buscado pelo ID conforme o Modelo
    buscarSeriePorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serie = new Titulo_1.Titulo();
            const fetch = new BuscaService_1.default();
            const response = yield fetch.get;
            try {
                serie.id = response.id;
                serie.nome = response.name;
                serie.descricao = response.overview;
                serie.data_lancamento = response.first_air_date.split('-').reverse().join('-');
                serie.idioma = response.original_language.toUpperCase();
                serie.nota = response.vote_average.toFixed(2);
                if (response.genres.length >= 1) {
                    response.genres.forEach(genre => {
                        serie.generos.push(genre['name']);
                    });
                }
                if (response.production_companies.length >= 1) {
                    response.production_companies.forEach(produtora => {
                        serie.produtoras.push(produtora['name']);
                    });
                }
                serie.poster += response.poster_path;
                serie.bg_poster += response.backdrop_path;
                serie.homepage = response.homepage;
                serie.imdb_id = response.imdb_id;
            }
            catch (error) {
                console.log(error);
            }
            return res.json(serie);
        });
    }
};
