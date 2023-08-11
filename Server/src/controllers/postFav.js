const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (!id || !name || !origin || !status || !image || !species || !gender)
        return res.status(401).json({ error: "Missing data" });
    try {
        await Favorite.findOrCreate({
            where: { id, name },
            defaults: { origin, status, species, gender },
        });
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = postFav;
