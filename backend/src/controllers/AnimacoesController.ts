import { Request, Response } from "express";
import AnimacaoService from "../services/AnimacaoService";
import { Data } from "../models/Data";
import { Titulo } from "../models/Titulo";

export default{
    //Retorna um array de 20 animações(seriados) conforme o Modelo
    async buscarAnimacoes(req: Request, res: Response){
        let array_de_animacoes: {}[] = [];
        const animacoes_model = new AnimacaoService();
        const response = await animacoes_model.getAnimacoes;
        response.forEach(element => {
            const animacao = new Data();
            animacao.id = element.id;
            animacao.nome = element.name;
            animacao.descricao = element.overview;
            if(element.poster_path != null ){
                animacao.imagem += element.poster_path;
            } else{
                animacao.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if(element.backdrop_path != null ){
                animacao.background_image += element.backdrop_path;
            } else{
                animacao.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_animacoes.push(animacao);
        });
        return res.json(array_de_animacoes);
    },

    //Retorna uma animação buscada pelo ID conforme o Modelo
    async buscarAnimacaoPorId(req: Request, res: Response){
        const animacao = new Titulo();
        const fetch = new AnimacaoService();
        const response = await fetch.getAnimacaoPorID;
        animacao.nome = response.name;
        animacao.descricao = response.overview;
        animacao.data_lancamento = response.first_air_date.split('-').reverse().join('-');
        animacao.idioma = response.original_language.toUpperCase();
        animacao.nota = response.vote_average.toFixed(2);
        if(response.genres.length > 1){
            response.genres.forEach(genre =>{
                animacao.generos.push(genre['name']);
            })
        }else{
            animacao.generos.push(response.genres);
        }
        if(response.production_companies.length >= 1){
            response.production_companies.forEach(produtora =>{
                animacao.produtoras.push(produtora['name']);
            })
        }else{
            animacao.produtoras.push(response.production_companies);
        }
        animacao.poster += response.poster_path;
        return res.json(animacao);
    }
}