const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deletFaV } = require('../controllers/handleFavorites');
const { Router } = require('express');

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deletFaV);

module.exports = router;