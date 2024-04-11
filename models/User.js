const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeUserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ativo: {
        type: Boolean,
    }
});

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    type: {
        type: typeUserSchema,
        required: true,
    }
    },
    { timestamps: true }
);