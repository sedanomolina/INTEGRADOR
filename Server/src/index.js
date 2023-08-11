const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");
const { conn } = require("./DB_connection");
require("dotenv").config();

const server = express();
const { PORT } = process.env;

// Write server.use(cors()) or :
server.use(
    cors({
        origin: "*", // Permitir solicitudes desde cualquier dominio
        credentials: true, // Permitir el envío de cookies y encabezados de autenticación
        allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept", // Permitir solo los encabezados especificados
        methods: "GET, POST, OPTIONS, PUT, DELETE", // Permitir solo los métodos especificados
    })
);

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

server.use(morgan("dev"));

server.use(express.json());

server.use("/rickandmorty", router);

// server.listen(PORT, () => console.log('Server raised in port: ' + PORT));
conn.sync({ force: true })
    .then(() => {
        server.listen(PORT || 3001, () =>
            console.log("Server raised in port: " + PORT)
        );
    })
    .catch((err) => console.log(err.message));
