const axios = require('axios');

function getCharById(res, id) {

    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.data)
        .then(({ name, gender, species, origin, image, status }) => ({
            id, name, gender, species, origin, image, status
        }))
        .then(details => {
            res.statusCode = (200);
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(details));
            res.end();
        })
        .catch(err => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.write(err.message);
            res.end();
        });
};

module.exports = getCharById;