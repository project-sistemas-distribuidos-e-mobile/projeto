import axios from "axios";
import { key } from "../keys";
import { clientID } from "../keys";
import { token } from "../keys";
import {busca} from "../routes";

class Pesquisa{
    //Busca os filmes por nome
    getFilmePorName = axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=pt-BR&query=${busca}`)
    .then((res) => {
        const data = res.data.results; 
        return data;
    })
    .catch(error => console.log(error))

    //Busca os seriados por nome
    getSeriePorName = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&language=pt-BR&query=${busca}`)
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    //Busca os jogos por nome
    getJogoPorNome = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: `fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, artworks.image_id, involved_companies.company.name, platforms.name; search "${busca}"; limit 5;`
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));  

}

export default Pesquisa;