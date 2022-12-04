"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../keys");
const routes_1 = require("../routes");
class AnimacaoService {
    getAnimacoes = (0, axios_1.default)(`https://api.themoviedb.org/3/discover/tv?api_key=${keys_1.key}&with_genres=16&vote_count.gte=90&sort_by=popularity.asc&language=pt-BR&page=${routes_1.pagina}`)
        .then((res) => {
        const data = res.data.results;
        return data;
    })
        .catch(error => {
        console.error(error.toJSON());
    });
}
exports.default = AnimacaoService;
