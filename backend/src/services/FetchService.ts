import axios from "axios";
import { key } from "../keys";

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
}

export default DataFetch;