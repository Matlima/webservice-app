const express = require("express");

const router = express.Router();

const { 
    createUser,
    getUsers,

} = require ("./controller/UserController");

// Rotas da API:
router.post("/", (req, res) => createUser(req, res));

router.get("/", (req, res) => getUsers(req, res));


module.exports = router;