const { Type } = require("../../db.js");
const axios = require("axios");

async function obtainTypes() {
  try {
    const types = await Type.findAll();
    if (types.length > 0) return types;
    else {
      const request = await axios.get(`https://pokeapi.co/api/v2/type`);
      const typesFromApi = request.data.results;
      for (let i = 0; i < typesFromApi.length; ++i) {
        await Type.create({
          name: typesFromApi[i].name,
        });
      }
      return typesFromApi;
    }
  } catch (error) {
    throw new Error("Error getting types: " + error.message);
  }
}

module.exports = {
  obtainTypes,
};
