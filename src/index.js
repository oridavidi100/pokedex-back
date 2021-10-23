
const express = require('express');
const app = express();
const port = 3000;
const cors= require('cors');

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
app.use(cors({
  origin:'*'
}))
app.use(express.static('public'));
app.use(express.json()) // parses requests as json

const pokemonRouter = require("./routers/pokemonRouter");
const userRouter = require("./routers/userRouter");
const {errorHandlerMiddleware} = require("./middleware/errorHandler")
const {userHandler} = require("./middleware/userHandler");


app.use(userHandler);

app.use('/pokemon', pokemonRouter);
app.use('/info', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

