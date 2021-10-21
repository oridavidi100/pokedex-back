const { response } = require('express');
const express = require('express');
const router = express.Router();

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

// http//localhost:8080/pokemon/get/:id

router.get('/get/:id',(req, res) => {

    const id = req.params.id;
    P.getPokemonByName(id)
    .then((response)=>{
        const pokeObj=createPokeObj(response)
        res.send(pokeObj)
    } )
    .catch(function(error) {
            res.send(error);
        });

})

module.exports = router;


//create Poke Object from response
function createPokeObj (pokeObj) {
    const typesArray = [];
    for(type of pokeObj.types) {
        typesArray.push(type.type.name);
    }
    const abilitiesArray = [];
    for(ability of pokeObj.abilities) {
        abilitiesArray.push(ability.ability.name);
    }
    const pokedexObj = {
        "name": pokeObj.forms[0].name, 
        "height": pokeObj.height,
        "weight": pokeObj.weight,
        "types": typesArray,
        "front_pic": pokeObj.sprites.front_default,
        "back_pic": pokeObj.sprites.back_default,
        "abilities": abilitiesArray
    } 
    return pokedexObj;
}
