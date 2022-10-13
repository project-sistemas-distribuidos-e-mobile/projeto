import axios from "axios";
import { Request, Response } from "express";
import { key } from "../keys";

class FilmeService{
    getMovies(req: Request, res: Response){
        axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${key}`)
        .then((response) => { 
            console.log(response);
            res.send(response.data);
        }).catch(error => console.log(error));
    }
}

export default FilmeService;