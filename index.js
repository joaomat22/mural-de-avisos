
// Aula 29
// detalhe que precisamos mudar no
// nosso código, que gerará um
// problema

// posso acessar em qualquer outra
// máquina
// os dados da nossa api não estão
// sendo mostrados nessa página

// ver o ip na hora para modificar
// em script.js

const PORT = 3000;
const express = require('express');
const apiRoute = require("./routes/api");
const path = require("path");


const app = express();


app.use('/', express.static(path.join(__dirname, "public")));
app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})



