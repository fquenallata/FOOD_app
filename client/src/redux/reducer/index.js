import { GET_RECIPES, GET_RECIPES_BY_NAME } from "../actions/types.js";

let initialState = { allRecipes: [], allRecipesCopy: [], posts: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: payload,
        allRecipesCopy: payload,
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        allRecipes: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
