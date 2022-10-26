import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import { Jogo } from "../models/Jogo";
import { TituloJogo } from "../models/TituloJogo";

export default{
    //Retorna um array de 20 jogos conforme o Modelo
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
        return res.json(array_de_jogos);
    },

    //Retorna um array de 5 jogos buscados pelo nome conforme o Modelo
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
        return res.json(array_de_jogos);
    },

    //Retorna um jogo especifico buscados pelo ID conforme o Modelo
    async buscarJogoPorId(req: Request, res: Response){
        const jogo = new TituloJogo();
        const fetch = new DataFetch();
        const response = await fetch.getJogoPorID;
        response.forEach(element => {
            jogo.nome = element.name;
            jogo.descricao = element.summary;
            jogo.data_lancamento = element.first_release_date;
            jogo.nota = element.rating;
            if(element.genres.length >= 1){
                element.genres.forEach(genre =>{
                    jogo.generos.push(genre['name']);
                })
            }else{
                jogo.generos.push(element.genres);
            }
           
            if(element.involved_companies.length >= 1){
                element.involved_companies.forEach(produtora =>{
                    jogo.produtoras.push(produtora['company']['name']);
                })
            }else{
                jogo.produtoras.push(element.involved_companies);
            }
            if(element.platforms.length >= 1){
                element.platforms.forEach(plataforma =>{
                    jogo.plataformas.push(plataforma['name']);
                })
            }else{
                jogo.plataformas.push(element.production_companies);
            }
            if(element.cover != undefined){
                jogo.poster += element.cover['image_id'] + '.jpg';  
            }else if(element.artworks != undefined){
                jogo.poster += element.artworks[0]['image_id'] + '.jpg';   
            }
            if(element.artworks != undefined){
                jogo.background_poster += element.artworks[0]['image_id'] + '.jpg';
            } else{
                jogo.background_poster = 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';
            }
        })
        return res.json(jogo);
    }
}