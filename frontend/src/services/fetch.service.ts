import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  //Url para requisições ao backend no servidor local
  baseUrl: string = 'http://localhost:5000';


  //Retorna od dados de filmes na rota /filmes do backend
  getFilmes(): Promise<any> {
    return axios.get(`${this.baseUrl}/filmes`);
  }
  //Retorna od dados de seriados na rota /series do backend
  getSeries(): Promise<any> {
    return axios.get(`${this.baseUrl}/series`);
  }
  //Retorna od dados de animações na rota /animacoes do backend
  getAnimacoes(): Promise<any> {
    return axios.get(`${this.baseUrl}/animacoes`);
  }
  //Retorna od dados de jogos na rota /jogos do backend
  getJogos(): Promise<any> {
    return axios.get(`${this.baseUrl}/jogos`);
  }


  //Envia o ID do filme desejado ao backend
  postFilme(id: number): Promise<any>{
    return axios.post(`${this.baseUrl}/titulo/movie/${id}`);
  }
  //Envia o ID do seriado/animações desejados ao backend
  postSerie(id: number): Promise<any>{
    return axios.post(`${this.baseUrl}/titulo/tv/${id}`);
  }
  //Envia o ID do jogo desejado ao backend
  postJogo(id: number): Promise<any>{
    return axios.post(`${this.baseUrl}/titulo/jogo/${id}`);
  }
  //Envia o número da página seguinte ao backend
  postHome(pagina: number): Promise<any>{
    return axios.post(`${this.baseUrl}/home/${pagina}`);
  }
  //Envia o nome pesquisado ao backend
  postPesquisa(nome: string): Promise<any>{
    return axios.post(`${this.baseUrl}/pesquisa/${nome}`);
  }


  //Retorna os dados dos filmes com base no nome pesquisado
  getFilmeByName(): Promise<any> {
    return axios.get(`${this.baseUrl}/res/filme`);
  }
  //Retorna os dados das series/animações com base no nome pesquisado
  getSerieByName(): Promise<any> {
    return axios.get(`${this.baseUrl}/res/serie`);
  }
  //Retorna os dados dos jogos com base no nome pesquisado
  //APENAS SE O NOME PESQUISADO FOR EM INGLÊS
  getJogoByName(): Promise<any> {
    return axios.get(`${this.baseUrl}/res/jogo`);
  }


  //Retorna os dados do filme com base no ID solicitado
  getFilme(): Promise<any> {
    return axios.get(`${this.baseUrl}/filme`);
  }
  //Retorna os dados do seriado/animação com base no ID solicitado
  getSerie(): Promise<any> {
    return axios.get(`${this.baseUrl}/serie`);
  }
  //Retorna os dados do jogo com base no ID solicitado
  getJogo(): Promise<any> {
    return axios.get(`${this.baseUrl}/jogo`);
  }
}
