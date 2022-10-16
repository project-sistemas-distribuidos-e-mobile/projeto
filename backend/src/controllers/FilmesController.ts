import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import {TvShowModel} from '../models/TvshowModel';
import {MovieModel} from '../models/MovieModel';

export default{
    async getMovies(req: Request, res: Response){
        let movies: {}[] = [];
        const filme = new DataFetch();
        const response = await filme.getPopularMovies;
        response.forEach(element => {
            const movie = new MovieModel();
            movie.title = element.title;
            movie.release = element.release_date;
            movie.overview = element.overview;
            movie.language = element.original_language;
            movie.rate = element.vote_average;
            movie.genre = element.genre_ids;
            movie.poster += element.poster_path;
            movie.bg_poster += element.backdrop_path;
            movies.push(movie);
        });
        res.send(movies);
    },
    async getTvShows(req: Request, res: Response){
        let shows: {}[] = [];
        const tvshow = new DataFetch();
        const response = await tvshow.getPopularTvShows;
        response.forEach(element => {
            const show = new TvShowModel();
            show.title = element.name;
            show.release_date = element.first_air_date;
            show.overview = element.overview;
            show.language = element.original_language;
            show.rate = element.vote_average;
            show.genre = element.genre_ids;
            show.poster += element.poster_path;
            show.bg_poster += element.backdrop_path;
            shows.push(show);
        });
        //console.log(shows);
        res.send(shows);
    }
}