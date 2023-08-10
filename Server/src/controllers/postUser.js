const { User } = require("../DB_connection");
const validateUser = require("../utils/validate");

async function postUser(req, res) {
    try {
        const { email, password } = req.body;
        const validatedUser = validateUser(email, password);
        const { error } = validatedUser;
        if (error) {
            return res.status(400).json({ error });
        }
        await User.findOrCreate({
            where: { email },
            defaults: {
                email,
                password,
            },
        });
        res.status(200).json({ error: "Saved user" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postUser;
