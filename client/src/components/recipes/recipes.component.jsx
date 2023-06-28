import Recipe from "../Recipe/Recipe.component.jsx";
import styles from "./Recipes.module.css";

function Recipes() {
  return (
    <div className={styles.recipeList}>
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  );
}

export default Recipes;
