import { Request, Response } from "express";
import DataFetch from "../services/FetchService";
import {TvShowModel} from '../models/TvshowModel';
import {MovieModel} from '../models/MovieModel';
import {AnimationModel} from '../models/AnimationModel';
import {GameModel} from '../models/GameModel';

export default{
    async getMovies(req: Request, res: Response){
        let movies: {}[] = [];
        const fetch_movies = new DataFetch();
        const response = await fetch_movies.getPopularMovies;
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
        const fetch_tvshow = new DataFetch();
        const response = await fetch_tvshow.getPopularTvShows;
        response.forEach(element => {
            const tv_show = new TvShowModel();
            tv_show.title = element.name;
            tv_show.release_date = element.first_air_date;
            tv_show.overview = element.overview;
            tv_show.language = element.original_language;
            tv_show.rate = element.vote_average;
            tv_show.genre = element.genre_ids;
            tv_show.poster += element.poster_path;
            tv_show.bg_poster += element.backdrop_path;
            shows.push(tv_show);
        });
        res.send(shows);
    },


    async getAnimations(req: Request, res: Response){
        let animations: {}[] = [];
        const fetch_animation = new DataFetch();
        const response = await fetch_animation.getAnimations;
        response.forEach(element => {
            const animation = new AnimationModel();
            animation.title = element.title;
            animation.overview = element.overview;
            animation.release_date = element.first_air_date;
            animation.language = element.original_language;
            animation.rate = element.vote_average;
            animation.genre = element.genre_ids;
            animation.poster += element.poster_path;
            animation.bg_poster += element.backdrop_path;
            animations.push(animation);
        });
        res.send(animations);
    },


    async getGames(req: Request, res: Response){
        let games: {}[] = [];
        const fetch_games = new DataFetch();
        const response = await fetch_games.getGames;
        response.forEach(element => {
            const game = new GameModel();
            game.name = element.name;
            game.age_ratings = element.age_ratings;
            game.aggregated_rating = element.aggregated_rating;
            game.alternative_names = element.alternative_names;           
            game.cover = element.cover;
            game.artworks = element.artworks;
            game.screenshots = element.screenshots;
            if(element.cover == undefined){
                if(game.screenshots == undefined){
                    console.log(game.artworks, game.name);
                } else{
                    game.cover_url = element.screenshots['image_id'] + '.jpg';
                }
            }else{
                game.cover_url += element.cover['image_id'] + '.jpg';
            }
            //console.log(game.cover_url);
            game.first_release_date = element.first_release_date;
            game.genres = element.genres;
            game.involved_companies = element.involved_companies;
            game.language_supports = element.language_supports;
            game.platforms = element.platforms;
            game.rating = element.rating;
            game.storyline = element.storyline;
            game.themes = element.themes;
            game.websites = element.websites;
            games.push(game);
        });
        res.send(games);
    }
}