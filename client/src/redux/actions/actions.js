import { GET_RECIPES, GET_RECIPES_BY_NAME } from "./types.js";
import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    const { data } = await axios.get(
      "http://localhost:3001/recipes/search?name"
    );
    return dispatch({
      type: GET_RECIPES,
      payload: data,
    });
  };
}

export function getRecipesByName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `http://localhost:3001/recipes/search?name=${name}`
    );
    return dispatch({
      type: GET_RECIPES_BY_NAME,
      payload: data,
    });
  };
}
