import axios from "axios";
import { key } from "../keys";
import { id } from "../routes";
import {busca} from "../routes";

class FilmeService{
    //Busca os filmes que estão em alta na semana
    getFilmes = axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&include_adult=false&language=pt-BR`)
    .then((res) => {
        const data = res.data.results;
        return data;
    })
    .catch(error => console.log(error));

    //Busca os filmes por nome
    getFilmePorName = axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=pt-BR&query=${busca}`)
    .then((res) => {
        const data = res.data.results; 
        return data;
    })
    .catch(error => console.log(error))

    //Busca um filme a partir do seu ID
    getFilmePorID = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));
}
export default FilmeService;