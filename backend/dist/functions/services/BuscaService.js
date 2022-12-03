"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const keys_1 = require("../keys");
const routes_1 = require("../routes");
const routes_2 = require("../routes");
class BuscaService {
    constructor() {
        this.get = axios_1.default.get(`https://api.themoviedb.org/3/${routes_2.categoria}/${routes_1.id}?api_key=${keys_1.key}&language=pt-BR`)
            .then(response => {
            return response.data;
        })
            .catch(error => console.log(error));
    }
}
exports.default = BuscaService;
