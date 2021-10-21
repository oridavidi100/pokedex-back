const http=require ('http')
const port =3000;
const pokemon=require('pokedex-promise-v2')
const p = new pokemon();

const express = require('express');
const { read } = require('fs');
const app = express();

// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","*");
// })


app.get('/',(req,res) => {
    res.status(200).json({
        message:"you in get"
    }
    )
})

module.exports = app; 
const server =http.createServer(app);

server.listen(port,()=>{
    console.log(`listen to ${port}`)
});