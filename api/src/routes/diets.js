const express = require("express");
const router = express.Router();

const { getDiets, postDiets } = require("../controllers/diets.js");

router.get("/", getDiets);
router.post("/", postDiets);

module.exports = router;
