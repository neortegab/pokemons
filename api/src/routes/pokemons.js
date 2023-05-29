const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Pokemon/pokecontroller.js");

router.get("/", async(req, res) => {
    try {
        const pokemons = await controller.getPokemons();
        res.json(pokemons);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;