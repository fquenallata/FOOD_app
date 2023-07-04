import {
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  GET_RECIPE_BY_ID,
  POST_RECIPE,
  GET_DIETS,
  RESET_RECIPE,
} from "../actions/types.js";

let initialState = { allRecipes: [], allRecipesCopy: [], diets: [], posts: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };

    case RESET_RECIPE:
      return {
        ...state,
        allRecipes: payload,
      };

    case GET_RECIPES:
      return {
        ...state,
        allRecipes: payload,
        allRecipesCopy: payload,
      };

    case POST_RECIPE:
      return {
        ...state,
        allRecipes: payload,
      };

    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        allRecipes: payload,
      };

    case GET_RECIPE_BY_ID:
      return {
        ...state,
        allRecipes: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
