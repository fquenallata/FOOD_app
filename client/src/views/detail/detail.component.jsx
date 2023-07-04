import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions/actions.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const dispatch = useDispatch();
  const { detailId } = useParams();
  const recipe = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(getRecipeById(detailId));
  }, []);

  const { image, title, summary, healthScore, instructions, diets } = recipe[0];

  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={image} alt={title} />
      <p
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: summary }}
      ></p>
      <p className={styles.instructions}>Instructions: {instructions}</p>
      <p className={styles.healthScore}>Health Score: {healthScore}</p>
      <ul className={styles.diets}>
        {diets.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;
