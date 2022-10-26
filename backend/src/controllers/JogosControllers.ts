import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import { Jogo } from "../models/Jogo";
import { Titulo } from "../models/Titulo";

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
        return res.send(array_de_jogos);
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
        return res.send(array_de_jogos);
    }
}