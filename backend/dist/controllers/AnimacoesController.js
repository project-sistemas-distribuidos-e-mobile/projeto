"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnimacaoService_1 = __importDefault(require("../services/AnimacaoService"));
const Data_1 = require("../models/Data");
exports.default = {
    //Retorna um array de 20 animações(seriados) conforme o Modelo
    async buscarAnimacoes(req, res) {
        let array_de_animacoes = [];
        const animacoes_model = new AnimacaoService_1.default();
        const response = await animacoes_model.getAnimacoes;
        response.forEach(element => {
            const animacao = new Data_1.Data();
            animacao.id = element.id;
            animacao.nome = element.name;
            animacao.descricao = element.overview;
            if (element.poster_path != null) {
                animacao.imagem += element.poster_path;
            }
            else {
                animacao.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if (element.backdrop_path != null) {
                animacao.background_image += element.backdrop_path;
            }
            else {
                animacao.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_animacoes.push(animacao);
        });
        return res.json(array_de_animacoes);
    }
};
