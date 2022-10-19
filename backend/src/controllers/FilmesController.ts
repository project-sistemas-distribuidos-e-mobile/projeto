import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import { Data } from "../models/Data";
import { Jogo } from "../models/Jogo";

export default{
    async buscarFilmes(req: Request, res: Response){
        let array_de_filmes: {}[] = [];
        const filmes_model = new DataFetch();
        const response = await filmes_model.getFilmes;
        response.forEach(element => {
            const filme = new Data();
            filme.id = element.id;
            filme.nome = element.title;
            filme.data_lancamento = element.release_date;
            filme.descricao = element.overview;
            filme.idioma = element.original_language;
            filme.nota = element.vote_average;
            filme.genero = element.genre_ids;
            if(element.poster_path != null ){
                filme.imagem += element.poster_path;
            } else{
                filme.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if(element.backdrop_path != null ){
                filme.background_image += element.backdrop_path;
            } else{
                filme.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_filmes.push(filme); 
        });
        return res.send(array_de_filmes);
    },


    async buscarSeries(req: Request, res: Response){
        let array_de_series: {}[] = [];
        const series_model = new DataFetch();
        const response = await series_model.getSeries;
        response.forEach(element => {
            const serie = new Data();
            serie.id = element.id;
            serie.nome = element.name;
            serie.data_lancamento = element.release_date;
            serie.descricao = element.overview;
            serie.idioma = element.original_language;
            serie.nota = element.vote_average;
            serie.genero = element.genre_ids;
            if(element.poster_path != null ){
                serie.imagem += element.poster_path;
            } else{
                serie.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if(element.backdrop_path != null ){
                serie.background_image += element.backdrop_path;
            } else{
                serie.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_series.push(serie);
        });
        return res.send(array_de_series);
    },


    async buscarAnimacoes(req: Request, res: Response){
        let array_de_animacoes: {}[] = [];
        const animacoes_model = new DataFetch();
        const response = await animacoes_model.getAnimacoes;
        response.forEach(element => {
            const animacao = new Data();
            animacao.id = element.id;
            animacao.nome = element.title;
            animacao.data_lancamento = element.release_date;
            animacao.descricao = element.overview;
            animacao.idioma = element.original_language;
            animacao.nota = element.vote_average;
            animacao.genero = element.genre_ids;
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
        return res.send(array_de_animacoes);
    },


    async buscarJogos(req: Request, res: Response){
        let array_de_jogos: {}[] = [];
        const jogos_model = new DataFetch();
        const response = await jogos_model.getJogos;
        response.forEach(element => {
            const jogo = new Jogo();
            jogo.id = element.id;
            jogo.nome = element.name;
            jogo.data_lancamento = element.first_release_date;
            jogo.descricao = element.summary;
            jogo.idioma = element.language_supports;
            jogo.nota = element.rating;
            jogo.imagem += element.cover['image_id'] + '.jpg';     
            element.platforms.forEach(e => {
                jogo.plataformas.push(e['name']);
            })
            element.genres.forEach(e => {
                jogo.genero.push(e['name']);
            })
            if(element.involved_companies === undefined){
                jogo.produtora.push('Produtora não informada');
            } else{
                element.involved_companies.forEach(e => {
                    jogo.produtora.push(e['company']['name']);
                })
            }
            console.log('-=-=-=-=-=FIM DA ITERAÇÃO-=-=-=-=-=-=-=-=-')
            array_de_jogos.push(jogo);
        });
        return res.send(array_de_jogos);
    }
}