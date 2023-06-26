const users = require('../utils/user')

function login(req, res) {
    const { email, password } = req.query;

    const validate =
        users.some(user => user.email === email && user.password === password);

    return res.status(200).json({ access: validate });
};

module.exports = login;