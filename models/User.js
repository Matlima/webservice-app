const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        type: String,
        required: true,
    }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);