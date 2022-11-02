import axios from "axios";
import { key } from "../keys";
import { id } from "../routes";
import {busca} from "../routes";
import {pagina} from "../routes"

class SerieService{
    //Busca os seriados/animações que estão em alta na semana    
    getSeries = axios(`https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=pt-BR&page=${pagina}`)
    .then((res) => {
        const data = res.data.results;
        return data;
    })
    .catch(error => console.log(error));

    //Busca series pelo nome
    getSeriePorName = axios(`https://api.themoviedb.org/3/search/tv?api_key=${key}&language=pt-BR&query=${busca}`)
    .then((res) => {
        const data = res.data.results;
        return data;
    })
    .catch(error => console.log(error));

    //Busca um seriado a partir do seu ID
    getSeriePorID = axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));  

}
export default SerieService;