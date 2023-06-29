import styles from "./Recipe.module.css";
function Recipe(props) {
  console.log(props.recipe);
  //me falta diets
  const { title, image, healthScore } = props.recipe;
  return (
    <div className={styles.recipeContainer}>
      <h2>{title}</h2>
      <img className={styles.image} src={image} alt="doesn't found" />
      <p>{healthScore}</p>
    </div>
  );
}

export default Recipe;
