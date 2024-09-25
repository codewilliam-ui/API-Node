

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.send({
        msg: "Hola como estás? Mole!"
    });
});

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port} `)
})