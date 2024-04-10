const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    await mongoose.connect(

    );
    console.log("Conectado com sucesso");
};

main().catch((err) => console.log(err));

module.exports = main;