import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  GET_RECIPE_BY_ID,
  POST_RECIPE,
  GET_DIETS,
  RESET_RECIPE,
} from "./types.js";
import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/recipes/?name");
    return dispatch({
      type: GET_RECIPES,
      payload: data,
    });
  };
}

export function getDiets() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:3001/diets");
    return dispatch({
      type: GET_DIETS,
      payload: data,
    });
  };
}

export function resetRecipes(allRecipesCopy) {
  return async function (dispatch) {
    return dispatch({
      type: RESET_RECIPE,
      payload: allRecipesCopy,
    });
  };
}

export function getRecipesByName(name) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `http://localhost:3001/recipes/?name=${name}`
    );
    return dispatch({
      type: GET_RECIPES_BY_NAME,
      payload: data,
    });
  };
}
export function getRecipeById(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/recipes/${id}`);
    return dispatch({
      type: GET_RECIPE_BY_ID,
      payload: data,
    });
  };
}

export function postRecipe(recipe) {
  return async function (dispatch) {
    const { data } = await axios.post("http://localhost:3001/recipes", recipe);
    return dispatch({
      type: POST_RECIPE,
      payload: [data],
    });
  };
}
