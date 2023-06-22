const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe } = require("../db.js");

const getRecipeByName = async (req, res) => {
  let { name } = req.query;
  name = name.toLowerCase();

  try {
    let recipe = await Recipe.findAll({
      attributes: [
        "id",
        "title",
        "image",
        "summary",
        "healthScore",
        "instructions",
      ],
      where: {
        title: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    const { data } = await axios.get(
      `http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=1`
    );
    const allRecipes = data.results;
    let recipesFiltered = allRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(name)
    );
    recipesFiltered = recipesFiltered.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        instructions: recipe.instructions,
        diets: recipe.diets,
      };
    });
    res.status(200).json([...recipe, ...recipesFiltered]);
  } catch (error) {
    res
      .status(404)
      .json({ message: "hola, necesitas ver mas sobre manejo de errores" });
  }
};
module.exports = getRecipeByName;
