const express = require('express');
const app = express();
const port = 3000;

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const pokemonRouter = require("./routers/PokemonRouters");

app.use('/pokemon', pokemonRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
