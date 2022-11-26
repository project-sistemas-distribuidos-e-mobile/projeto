# Projeto Sistemas Distribuidos e Mobile

Nome do Aplicativo ClickMovies

This project was developed with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2 and [IONIC](https://ionicframework.com/) for the front-end and [NojeJS](https://nodejs.org/en/) for the back-end and [Firebase](https://firebase.google.com/) for the Database.

The project consists on a Web App for search information about movies and games. Our front-end allows the user to realize a search by name and the back-end calls one or both of the two external APIs ([TMDB](https://www.themoviedb.org/documentation/api) and [IGDB](https://api-docs.igdb.com/#about)) for fecth the requested data. Then our application shows the data fetched on a beautiful way.

Google Docs -> [Other Documents](https://docs.google.com/document/d/1yqmfrhmdaKIrdaT5l3nYjOFbd2pnD3jUAjQLLq-oIUA/edit?usp=sharing).

## Development front-end server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development back-end server

Run `npm run dev:server` for a dev server. Navigate to `http://localhost:5000/`. The application will automatically reload if you change any of the source files.


## Developers

* [José Mourão](https://github.com/josemouraocpt) 🐵
* [Diego Diniz](https://github.com/DiegoDiniz59)
* [Lucas Pinas](https://github.com/Lucas1598698)
* [Marcos Iuri](https://github.com/marcosiuri)


## Documentation
The following instructions and prints shows how to use our RestFul API (backend) for requests about movies, television shows, animations and games informatiom. The API return a response based on the HTTP Verb, that can be either GET or POST, all the requests were made to the location `http://localhost:5000`.

## Routes that return an Array of data

### Code examples:
RequestPath **`http://localhost:5000/filmes`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/filmes',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/filmes');
        };
    
### Response Example on ThunderClient
![Endpoint /filmes](/thunder_client/route-filmes.jpg)    





### Code examples:
RequestPath **`http://localhost:5000/series`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/series',<br>
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/series');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-series.jpg) 






### Code examples:
RequestPath **`http://localhost:5000/animacoes`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/animacoes',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/animacoes');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-animacoes.jpg) 







### Code examples:
RequestPath **`http://localhost:5000/jogos`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/jogos',<br>
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/jogos');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-jogos.jpg) 


## Route to find a item by name

### Code examples:
RequestPath **`http://localhost:5000/pesquisa/:nome`** here the param `:nome` can be defined by the user

Axios: 

    axios({ 
            url: 'http://localhost:5000/pesquisa/Warcraft',
            method: 'POST',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    post(name: string): Observable<any[]>{
            return this.http.post<any[]>('http://localhost:5000/pesquisa/${name}', name);
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-pesquisa.jpg) 

## Routes that return an Array of data by the name given

### Code examples:
RequestPath **`http://localhost:5000/res/filme`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/res/filme',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/res/filme');
        };
    
### Response Example on ThunderClient
![Endpoint /filmes](/thunder_client/route-res-filme.jpg)    





### Code examples:
RequestPath **`http://localhost:5000/res/serie`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/res/serie',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/res/serie');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-res-serie.jpg) 





### Code examples:
RequestPath **`http://localhost:5000/res/jogo`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/res/jogo',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/res/jogo');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-res-jogo.jpg) 


## Route to find a item by it's category and ID


### Code examples:
RequestPath **`http://localhost:5000/titulo/:categoria/:id`** here the params `:categoria` and `:id` can be defined by the user to filter what kind of media they want information about and the **id** item.

#### The available categorys are **movie** and **tv**
Axios: 

    axios({ 
            url: 'http://localhost:5000/titulo/jogo/123',
            method: 'POST',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    post(id: number): Observable<any[]>{
            return this.http.post<any[]>('http://localhost:5000/titulo/jogo/${id}', id);
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-titulo-jogo.jpg) 


## Routes that return data about the item based on it's category and ID

### Code examples:
RequestPath **`http://localhost:5000/filme`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/filme',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/filme');
        };
    
### Response Example on ThunderClient
![Endpoint /filmes](/thunder_client/route-filme.jpg)    





### Code examples:
RequestPath **`http://localhost:5000/serie`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/serie',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/serie');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-serie.jpg) 





### Code examples:
RequestPath **`http://localhost:5000/jogo`**

Axios: 

    axios({ 
            url: 'http://localhost:5000/jogo',
            method: 'GET',
        })
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

HttpCommon: 

    get(): Observable<any[]>{
            return this.http.get<any[]>('http://localhost:5000/jogo');
        };
    
### Response Example on ThunderClient
![Endpoint /series](/thunder_client/route-jogo.jpg) 

