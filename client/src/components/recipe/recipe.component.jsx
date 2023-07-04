import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

function Recipe(props) {
  //me falta diets
  const { id, title, image, healthScore, diets } = props.recipe;

  return (
    <div className={styles.recipeContainer}>
      {/* imagen */}
      <Link to={`/detail/${id}`}>
        <img className={styles.image} src={image} alt="doesn't found" />
      </Link>
      {/* titulo */}
      <div>
        <p className={styles.title}>
          <strong>{title}</strong>
        </p>
      </div>
      {/* healtScore */}
      <div className={styles.healthScoreContainer}>
        <p className={styles.healthScoreText}>{"health score -->"}</p>
        <p className={styles.healthScoreNumber}>
          <strong>{healthScore}</strong>
        </p>
      </div>
      {/* dietas */}
      <div className={styles.dietsContainer}>
        <p className={styles.healthScoreText}>
          <em>types of diets: </em>
        </p>
        {diets.map((diet, index) => (
          <p key={index} className={styles.dietTexts}>
            -{diet}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
