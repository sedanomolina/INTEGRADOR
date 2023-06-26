const http = require('http');
// const characters = require('./utils/data');
const getCharById = require('./controllers/getCharById')

// Crear el servidor
const server = http.createServer((request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url.includes('/rickandmorty/character')) {

        const id = request.url.split('/').pop();
        // ! Estas líneas comentadas usaban el archivo './utils/data.js'(getCharById) y fueron 
        // ! reemplazadas por una función getCharById
        // ! que obtiene data de una api (https://rickandmortyapi.com/api/character/${id}).
        // const character = characters.find((character) => character.id === Number(id));

        // if (character) {
        //     response.setHeader('Content-Type', 'application/json');
        //     response.end(JSON.stringify(character));
        // } else {
        //     response.statusCode = 404;
        //     response.end('Character not found');
        // }

        getCharById(response, id)
    } else {
        response.statusCode = 404;
        response.end('Not found');
    }
});

// Iniciar el servidor
const port = 3002;
server.listen(port, 'localhost', () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
