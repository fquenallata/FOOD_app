import Recipe from "../Recipe/Recipe.component.jsx";
import styles from "./Recipes.module.css";
import { useState } from "react";

function Recipes(props) {
  const { allRecipes } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const totalPages = Math.ceil(allRecipes.length / recipesPerPage);

  const getRecipesForPage = (page) => {
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return allRecipes.slice(startIndex, endIndex);
  };

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const currentRecipes = getRecipesForPage(currentPage);

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => handlePage(i)}>
        {i}
      </button>
    );
  }
  return (
    <div>
      <div className={styles.recipeList}>
        {currentRecipes?.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className={styles.buttonsContainer}>{pageButtons}</div>
    </div>
  );
}

export default Recipes;
