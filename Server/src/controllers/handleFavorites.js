let myFavorites = [{ name: 'yoo' }];

function postFav(req, res) {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
};

function deletFaV(req, res) {
    const { id } = req.params;
    myFavorites = myFavorites.filter(character => character.id != id);
    return res.status(200).json(myFavorites)
};

module.exports = { postFav, deletFaV };