import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import { Data } from "../models/Data";
import { Jogo } from "../models/Jogo";
import { Titulo } from "../models/Titulo";

export default{
    async buscarFilmes(req: Request, res: Response){
        let array_de_filmes: {}[] = [];
        const filmes_model = new DataFetch();
        const response = await filmes_model.getFilmes;
        response.forEach(element => {
            const filme = new Data();
            filme.id = element.id;
            filme.nome = element.title;
            filme.descricao = element.overview;
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
            serie.descricao = element.overview;
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
            jogo.descricao = element.summary;
            if(element.cover != undefined){
                jogo.imagem += element.cover['image_id'] + '.jpg';  
            }else if(element.artworks != undefined){
                jogo.imagem += element.artworks['image_id'] + '.jpg';
            }else if(element.screenshots != undefined){
                jogo.imagem += element.screenshots['image_id'] + '.jpg';
            }
            if(element.artworks != undefined){
                jogo.background_imagem += element.artworks[0]['image_id'] + '.jpg';
            } else if(element.screenshots != undefined){
                jogo.background_imagem += element.screenshots[0]['image_id'] + '.jpg';
            } else{
                jogo.background_imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_jogos.push(jogo);
        });
        return res.send(array_de_jogos);
    },


    async buscarFilmePorNome(req: Request, res: Response){
        let resultado_pesquisa: {}[] = [];
        const fetch = new DataFetch();
        const response = await fetch.getFilmePorName;
        try{
        for(let i = 0; i<= 5; i++){
            const data = new Data();
            data.id = response[i].id;
            data.nome = response[i].title;
            if(response[i].overview == undefined || response[i].overview == ''){
                data.descricao = "Descrição não encontrada.";
            }else{
                data.descricao = response[i].overview;
            }
            if(response[i].poster_path != null ){
                data.imagem += response[i].poster_path;
            } else{
                data.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if(response[i].backdrop_path != null ){
                data.background_image += response[i].backdrop_path;
            } else{
                data.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            resultado_pesquisa.push(data); 
        }
    }
    catch (error: any){
        console.log(error);
    }
        return res.send(resultado_pesquisa);
    },

    async buscarSeriePorNome(req: Request, res: Response){
        let resultado_pesquisa: {}[] = [];
        const fetch = new DataFetch();
        const response = await fetch.getSeriePorName;
        for(let i = 0; i < response.length; i++){
            const data = new Data();    
            data.id = response[i].id;
            data.nome = response[i].name;
            if(response[i].overview == undefined || response[i].overview == ''){
                data.descricao = "Descrição não encontrada.";
            }else{
                data.descricao = response[i].overview;
            }
            if(response[i].poster_path != null ){
                data.imagem += response[i].poster_path;
            } else{
                data.imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            if(response[i].backdrop_path != null ){
                data.background_image += response[i].backdrop_path;
            } else{
                data.background_image = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            resultado_pesquisa.push(data);
            if(i > 5){
                break;
            }
        }
        return res.send(resultado_pesquisa); 
    },


    async buscarJogoPorNome(req: Request, res: Response){
        let array_de_jogos: {}[] = [];
        const jogos_model = new DataFetch();
        const response = await jogos_model.getJogoPorNome;
        response.forEach(element => {
            const jogo = new Jogo();
            jogo.id = element.id;
            jogo.nome = element.name;
            jogo.descricao = element.summary;
            if(element.cover != undefined){
                jogo.imagem += element.cover['image_id'] + '.jpg';  
            }else if(element.artworks != undefined){
                jogo.imagem += element.artworks['image_id'] + '.jpg';
            }else if(element.screenshots != undefined){
                jogo.imagem += element.screenshots['image_id'] + '.jpg';
            }
            if(element.artworks != undefined){
                jogo.background_imagem += element.artworks[0]['image_id'] + '.jpg';
            } else if(element.screenshots != undefined){
                jogo.background_imagem += element.screenshots[0]['image_id'] + '.jpg';
            } else{
                jogo.background_imagem = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
            array_de_jogos.push(jogo);
        });
        return res.send(array_de_jogos);
    },


    async buscarFilmePorId(req: Request, res: Response){
        const filme = new Titulo();
        const fetch = new DataFetch();
        const response = await fetch.getFilmePorID;
        filme.nome = response.title;
        filme.descricao = response.overview;
        filme.data_lancamento = response.release_date;
        filme.idioma = response.original_language == 'en' ? "Inglês" :  response.original_language;
        filme.status = response.status;
        filme.nota = response.vote_average;
        if(response.genres.length > 1){
            response.genres.forEach(genre =>{
                filme.generos.push(genre['name']);
            })
        }else{
            filme.generos.push(response.genres);
        }
        if(response.production_companies.length >= 1){
            response.production_companies.forEach(produtora =>{
                filme.produtoras.push(produtora['name']);
            })
        }else{
            filme.produtoras.push(response.production_companies);
        }
        filme.poster += response.poster_path;
        filme.background_poster += response.backdrop_path;

        return res.send(filme);
    }
}