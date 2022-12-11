"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../keys");
const routes_1 = require("../routes");
const routes_2 = require("../routes");
class SerieService {
    constructor() {
        //Busca os seriados/animações que estão em alta na semana    
        this.getSeries = (0, axios_1.default)(`https://api.themoviedb.org/3/trending/tv/week?api_key=${keys_1.key}&language=pt-BR&page=${routes_2.pagina}`)
            .then((res) => {
            const data = res.data.results;
            return data;
        })
            .catch(error => console.log(error));
        //Busca series pelo nome
        this.getSeriePorName = (0, axios_1.default)(`https://api.themoviedb.org/3/search/tv?api_key=${keys_1.key}&language=pt-BR&query=${routes_1.busca}`)
            .then((res) => {
            const data = res.data.results;
            return data;
        })
            .catch(error => console.log(error));
    }
}
exports.default = SerieService;
