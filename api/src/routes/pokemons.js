const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Pokemon/pokecontroller.js");

router.get("/", async(req, res) => {
    const { name } = req.query;
    if(!name){
        try {
            const pokemons = await controller.getPokemons();
            res.json(pokemons);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    else{
        
        try {
            const pokemons = await controller.getPokemonByName(name);
            res.json(pokemons);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
});

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await controller.getPokemonById(id);
        res.json(pokemon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;