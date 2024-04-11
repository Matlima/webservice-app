const User = require("../models/User");

const fs = require("fs");

const createUser = async (req, res) => {
    try {
        const { nome, email, telefone, login, senha, type } = req.body;

        // Verifica se os campos na requisição estão preenchidos
        if(!nome || !email || !telefone || !login || !senha || !type ) {
            console.log(req.body)
            return res.status(400).json({ msg: "Por favor, preencha todos os campos" });
        }

        // Criar um novo usuário com base nas informações preenchidas
        const newUser = new User({
            nome, email, telefone, login, senha, type
        });

        // usa a função do moongose para salvar direto no banco de dados
        await newUser.save();
        
        res.json({ msg: "User criado com sucesso!", newUser });

    } catch (error) {
        console.log(error.message);
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        res.status(500).send("Ocorreu um erro!");
    }
};




module.exports = {
    createUser,
    getUsers,
    

};