const express = require("express");

const router = express.Router();

const { 
    createUser,
} = require ("./controller/UserController");

// Rotas da API:
router.post("/", (req, res) => createUser(req, res));



module.exports = router;