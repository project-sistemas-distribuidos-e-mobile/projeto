import axios from "axios";
import { key } from "../keys";
import { clientID } from "../keys";
import { token } from "../keys";

class DataFetch{
    getPopularMovies = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    getPopularTvShows = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=pt-BR&page=1`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    getAnimations = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=pt-BR&with_genres=16&`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error));

    getGames = axios({
        url: `https://api.igdb.com/v4/games`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': clientID,
            'Authorization': `Bearer ${token}`,
        },
        data: "fields name, age_ratings, aggregated_rating, alternative_names, artworks, cover.image_id, first_release_date, genres, involved_companies, language_supports, platforms, rating, storyline, themes, websites, screenshots.image_id; where rating > 80 & release_dates.date > 1591412743;limit 20;"
        })
        .then((res) => {
            const data = res.data;
            return data;
        })
        .catch(error => console.log(error));
}

export default DataFetch;