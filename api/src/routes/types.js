const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Type/typeController.js");

router.get("/", async(req, res) => {
    try {
        const types = await controller.obtainTypes();
        res.json(types);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;