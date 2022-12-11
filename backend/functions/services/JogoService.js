"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../keys");
const keys_2 = require("../keys");
const routes_1 = require("../routes");
const routes_2 = require("../routes");
class JogoService {
    constructor() {
        //Busca os jogos mais populares, com nota acima de 90 e data de lançamento superior a 2018 ou 2020 
        //não sei ao certo :P
        this.getJogos = (0, axios_1.default)({
            url: `https://api.igdb.com/v4/games`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': keys_1.clientID,
                'Authorization': `Bearer ${keys_2.token}`,
            },
            data: `fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, artworks.image_id, screenshots.image_id, involved_companies.company.name, platforms.name; where rating > ${Math.floor(Math.random() * 101)} & first_release_date > 1514772000;limit 20; sort rating asc;`
        })
            .then((res) => {
            const data = res.data;
            return data;
        })
            .catch(error => console.log(error));
        //Busca os jogos por nome
        this.getJogoPorNome = (0, axios_1.default)({
            url: `https://api.igdb.com/v4/games`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': keys_1.clientID,
                'Authorization': `Bearer ${keys_2.token}`,
            },
            data: `fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, artworks.image_id, involved_companies.company.name, platforms.name; search "${routes_2.busca}"; limit 10;`
        })
            .then((res) => {
            const data = res.data;
            return data;
        })
            .catch(error => console.log(error));
        //Busca os jogos por nome/titulo
        this.getJogoPorID = (0, axios_1.default)({
            url: `https://api.igdb.com/v4/games`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': keys_1.clientID,
                'Authorization': `Bearer ${keys_2.token}`,
            },
            data: `fields name, summary, first_release_date, rating, genres.name, involved_companies.company.name, cover.image_id, artworks.image_id, platforms.name, websites.url; where id = ${routes_1.id};`
        })
            .then((res) => {
            const data = res.data;
            return data;
        })
            .catch(error => console.log(error));
    }
}
exports.default = JogoService;
