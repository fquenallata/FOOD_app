import { Link } from "react-router-dom";

import styles from "./Recipe.module.css";
function Recipe(props) {
  //me falta diets
  const { title, image, healthScore, id } = props.recipe;
  return (
    <div className={styles.recipeContainer}>
      <h2>{title}</h2>
      <Link to={`/detail/${id}`}>
        <img className={styles.image} src={image} alt="doesn't found" />
      </Link>
      <p>{healthScore}</p>
    </div>
  );
}

export default Recipe;
