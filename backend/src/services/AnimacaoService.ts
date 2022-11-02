import axios from "axios";
import { key } from "../keys";
import { id } from "../routes";

class AnimacaoService{
    //TONAR ISSO MAIS DINAMICO
    //Busca os seriados animados mais populares e com nota acima de 90
    getAnimacoes = axios(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=16&vote_count.gte=90&sort_by=popularity.asc&include_adult=false&language=pt-BR`)
    .then((res) => {
        const data = res.data.results;
        return data;
    })
    .catch(error => console.log(error));

    //Busca uma animação a partir do seu ID
    //melhorar para ficar mais dinamico
    getAnimacaoPorID = axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=pt-BR`)
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));    

}
export default AnimacaoService;