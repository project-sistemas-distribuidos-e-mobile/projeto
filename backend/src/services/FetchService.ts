import axios from "axios";
import { key } from "../keys";
import { clientID } from "../keys";
import { token } from "../keys";
import {busca} from "../routes"
import { id } from "../routes";

class DataFetch{
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

    //Busca os filmes por nome/titulo
    getFilmePorName = axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=pt-BR&query=${busca}`)
    .then((res) => {
        const data = res.data.results; 
        return data;
    })
    .catch(error => console.log(error))

    //Busca os seriados por nome/titulo (animações inclusas)
    getSeriePorName = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&language=pt-BR&query=${busca}`)
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    //Busca os jogos por nome/titulo
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


    //Busca um filme a partir do seu ID
    getFilmePorID = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));
    
    //Busca um seriado a partir do seu ID
    getSeriePorID = axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));  

    //Busca uma animação a partir do seu ID
    //melhorar para ficar mais dinamico
    getAnimacaoPorID = axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));    

    //Busca os jogos por nome/titulo
    getJogoPorID = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: `fields name, summary, first_release_date, rating, genres.name, involved_companies.company.name, cover.image_id, artworks.image_id, platforms.name, url; where id = ${id};`
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error)); 
}

export default DataFetch;