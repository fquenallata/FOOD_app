const express = require("express");
const router = express.Router();

const { postRecipes } = require("../controllers");

router.post("/", postRecipes);
router.get("/:idRecipe", () => {});
router.get("/searchBy", () => {});

module.exports = router;
