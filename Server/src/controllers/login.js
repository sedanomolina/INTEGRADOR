const users = require('../utils/user')

function login(req, res) {
    const { email, password } = req.query;

    const access =
        users.some((user) => user.email === email && user.password === password);

    return res.status(200).json({ access });
};

module.exports = login;