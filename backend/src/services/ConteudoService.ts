import axios from "axios";
import { key } from "../keys";
import { clientID } from "../keys";
import { token } from "../keys";
import { id } from "../routes";

class Conteudo{
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

export default Conteudo;