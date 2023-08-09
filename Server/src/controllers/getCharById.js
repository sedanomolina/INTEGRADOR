const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
    const { id } = req.params;
    try {
        const response = await axios(`${URL}${id}`);
        const { name, gender, species, origin, image, status } =
            await response.data;
        const characterDetails = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status,
        };
        res.status(200).json(characterDetails);
    } catch (error) {
        const { status } = error.response;
        const { message } = error;
        res.status(status).send(message);
    }
}

module.exports = getCharById;
// function getCharById(req, res) {

//     const { id } = req.params;
//     axios
//         .get(`${URL}${id}`)
//         .then(res => res.data)
//         .then(({ name, gender, species, origin, image, status }) => ({
//             id, name, gender, species, origin, image, status
//         }))
//         .then(details => res.status(200).json(details))
//         .catch(err => {
//             if (err.response.status === 500) {
//                 res.status(500).send(err.message)
//             } else {
//                 res.status(404).send('Not Found')
//             }
//         })
// };
