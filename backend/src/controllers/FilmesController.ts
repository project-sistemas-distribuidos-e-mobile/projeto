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
            jogo.nota = element.rating;
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
            if(element.platforms != undefined){
               element.platforms.forEach(e => {     
                    jogo.plataformas.push(e['name']);
                }) 
            } else{
                jogo.plataformas.push("Não informado");
            }         
            if(element.genres != undefined){
               element.genres.forEach(e => {     
                    jogo.genero.push(e['name']);
                }) 
            } else{
                jogo.genero.push("Não informado");
            }         
            if(element.involved_companies === undefined){
                jogo.produtora.push('Produtora não informada');
            } else{
                element.involved_companies.forEach(e => {
                    jogo.produtora.push(e['company']['name']);
                })
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
            data.data_lancamento = response[i].first_release_date;
            if(response[i].overview == undefined || response[i].overview == ''){
                data.descricao = "Descrição não encontrada.";
            }else{
                data.descricao = response[i].overview;
            }
            data.idioma = response[i].original_language;
            data.nota = response[i].vote_average;
            data.genero = response[i].genre_ids;
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
            data.data_lancamento = response[i].first_release_date;
            if(response[i].overview == undefined || response[i].overview == ''){
                data.descricao = "Descrição não encontrada.";
            }else{
                data.descricao = response[i].overview;
            }
            data.idioma = response[i].original_language;
            data.nota = response[i].vote_average;
            data.genero = response[i].genre_ids;
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
            jogo.data_lancamento = element.first_release_date;
            jogo.descricao = element.summary;
            jogo.nota = element.rating;
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
            if(element.platforms != undefined){
               element.platforms.forEach(e => {     
                    jogo.plataformas.push(e['name']);
                }) 
            } else{
                jogo.plataformas.push("Não informado");
            }         
            if(element.genres != undefined){
               element.genres.forEach(e => {     
                    jogo.genero.push(e['name']);
                }) 
            } else{
                jogo.genero.push("Não informado");
            }         
            if(element.involved_companies === undefined){
                jogo.produtora.push('Produtora não informada');
            } else{
                element.involved_companies.forEach(e => {
                    jogo.produtora.push(e['company']['name']);
                })
            }
            array_de_jogos.push(jogo);
        });
        return res.send(array_de_jogos);
    },
}