"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Titulo = void 0;
class Titulo {
    constructor() {
        this.id = 0;
        this.nome = '';
        this.descricao = '';
        this.data_lancamento = '';
        this.idioma = '';
        this.nota = 0;
        this.generos = [];
        this.produtoras = [];
        this.poster = 'https://image.tmdb.org/t/p/original';
        this.bg_poster = 'https://image.tmdb.org/t/p/original';
        this.homepage = '';
        this.imdb_id = '';
    }
}
exports.Titulo = Titulo;
