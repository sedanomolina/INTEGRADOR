const express = require('express');
const morgan = require('morgan')
const getCharById = require('./controllers/getCharById');
const cors = require('cors');
const router = require('./routes/index')
const server = express();
const PORT = 3001;


// Write server.use(cors()) or :
server.use(cors({
    origin: '*', // Permitir solicitudes desde cualquier dominio
    credentials: true, // Permitir el envío de cookies y encabezados de autenticación
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept', // Permitir solo los encabezados especificados
    methods: 'GET, POST, OPTIONS, PUT, DELETE', // Permitir solo los métodos especificados
}));

// Rustic mode:
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//         'Access-Control-Allow-Methods',
//         'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
// });

server.use(morgan('dev'))

server.get('/character/:id', (request, response) => {
    getCharById(request, response);
});

server.use(express.json());

server.use('/rickandmorty', router)

server.listen(PORT, () => console.log('Server raised in port: ' + PORT));
