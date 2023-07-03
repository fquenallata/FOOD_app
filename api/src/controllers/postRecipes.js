const { Recipe } = require("../db.js");

const postRecipes = async (req, res) => {
  try {
    const { title, image, summary, healthScore, instructions, diets } =
      req.body;
    if (title && image && summary && healthScore && instructions && diets) {
      const newRecipe = await Recipe.create({
        title,
        image,
        summary,
        healthScore,
        instructions,
      });
      await newRecipe.addDiets(diets);

      res.status(200).json(newRecipe);
    } else {
      res.status(400).json({ error: "Insufficient data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = postRecipes;
