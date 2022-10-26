import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import { Data } from "../models/Data";
import { Titulo } from "../models/Titulo";

export default{
    //Retorna um array de 20 seriados conforme o Modelo 
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

    //Retorna um array de 5 seriados buscados pelo nome conforme o Modelo
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

    //Retorna 1 seriado buscado pelo ID conforme o Modelo
    async buscarSeriePorId(req: Request, res: Response){
        const serie = new Titulo();
        const fetch = new DataFetch();
        const response = await fetch.getSeriePorID;
        serie.nome = response.name;
        serie.descricao = response.overview;
        serie.data_lancamento = response.first_air_date;
        serie.idioma = response.original_language;
        serie.status = response.status;
        serie.nota = response.vote_average;
        if(response.genres.length > 1){
            response.genres.forEach(genre =>{
                serie.generos.push(genre['name']);
            })
        }else{
            serie.generos.push(response.genres);
        }
        if(response.production_companies.length >= 1){
            response.production_companies.forEach(produtora =>{
                serie.produtoras.push(produtora['name']);
            })
        }else{
            serie.produtoras.push(response.production_companies);
        }
        serie.poster += response.poster_path;
        serie.background_poster += response.backdrop_path;

        return res.send(serie);
    }

}