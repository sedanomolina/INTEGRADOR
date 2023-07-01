let myFavorites = [];

function postFav(req, res) {
    myFavorites.push(req.body);
    res.status(200).json(myFavorites);
};

function deletFaV(req, res) {
    const { id } = req.params;
    myFavorites = myFavorites.filter(character => character.id != id);
    res.status(200).json(myFavorites)
};

module.exports = { postFav, deletFaV };