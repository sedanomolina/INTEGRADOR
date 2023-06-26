const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {

    const { id } = req.params;

    axios
        .get(`${URL}${id}`)
        .then(res => res.data)
        .then(({ name, gender, species, origin, image, status }) => ({
            id, name, gender, species, origin, image, status
        }))
        .then(details => res.status(200).json(details))
        .catch(err => {
            if (err.response.status === 500) {
                res.status(500).send(err.message)
            } else {
                res.status(404).send('Not Found')
            }
        })
};

module.exports = getCharById;
