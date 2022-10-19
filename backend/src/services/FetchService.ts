import axios from "axios";
import { key } from "../keys";
import { clientID } from "../keys";
import { token } from "../keys";

class DataFetch{
    getFilmes = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    getSeries = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    getAnimacoes = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16&vote_count.gte=80&sort_by=popularity.asc`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    getJogos = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: "fields id, name, first_release_date, summary, language_supports.language.name, rating, genres.name, cover.image_id, involved_companies.company.name, platforms.name; where rating > 80 & first_release_date > 946692000;limit 20;"
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));
}

export default DataFetch;