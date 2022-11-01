import axios from "axios";
import { key } from "../keys";
import { clientID } from "../keys";
import { token } from "../keys";

class Home{
    //Busca os filmes que estão em alta na semana
    getFilmes = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&include_adult=false&language=pt-BR`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    //Busca os seriados/animações que estão em alta na semana    
    getSeries = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&include_adult=false&language=pt-BR`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    //TONAR ISSO MAIS DINAMICO
    //Busca os seriados animados mais populares e com nota acima de 90
    getAnimacoes = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=16&vote_count.gte=90&sort_by=popularity.asc&include_adult=false&language=pt-BR`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    //Busca os jogos mais populares, com nota acima de 90 e data de lançamento superior a 2018 ou 2020 
    //não sei ao cero :P
    getJogos = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: "fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, artworks.image_id, screenshots.image_id, involved_companies.company.name, platforms.name; where rating > 90 & first_release_date > 1514772000;limit 20; sort rating asc;"
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));
}

export default Home;