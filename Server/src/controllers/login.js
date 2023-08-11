

const { User } = require("../DB_connection");

async function login(req, res) {
    try {
        const { email, password } = req.query;
        if (!email || !password) {
            return res.status(400).json({ error: "Missing data" });
        }
        const user = await User.findOne({
            where: { email },
        });
        if (!user) {
            return res.status(404).json({ error: "User not fond" });
        }
        if (user.password !== password) {
            return res.status(403).json({ error: "Incorrect password" });
        }
        return res.status(200).json({ access: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = login;
