const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send('Olá mundo 2');
})

app.listen(3000, () => {
    console.log("Rodando")
})