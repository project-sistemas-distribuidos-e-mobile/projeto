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
        .catch(error => console.log(error))

    tvshows: {}[] = [];
    getPopularTvShows = axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=pt-BR&page=1`,
        responseType: 'json',
        })
        .then((res) => {
            const data = res.data.results;
            return data;
        })
        .catch(error => console.log(error))
}

export default DataFetch;