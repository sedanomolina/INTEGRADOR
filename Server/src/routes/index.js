const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const deletFaV = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const { Router } = require("express");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/user", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deletFaV);

module.exports = router;
