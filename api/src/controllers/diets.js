const axios = require("axios");

const getDiets = (req, res) => {
  res.status(200).json({ message: "hola" });
};
const postDiets = async (req, res) => {};
module.exports = { getDiets, postDiets };
