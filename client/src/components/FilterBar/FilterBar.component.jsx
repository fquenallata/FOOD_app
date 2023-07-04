import styles from "./FilterBar.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, resetRecipes } from "../../redux/actions/actions.js";

function FilterBar() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const allRecipes = useSelector((state) => state.allRecipes);
  const allRecipesCopy = useSelector((state) => state.allRecipesCopy);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const resetAllRecipes = () => {
    dispatch(resetRecipes(allRecipesCopy));
  };

  return (
    <div className={styles.filterBarContainer}>
      {/* botones */}

      <button onClick={handleRefresh}>refresh</button>

      <Link to={`/postRecipe`}>
        <button>create</button>
      </Link>
      {/* filtros son 4 select*/}
      <select className={styles.select} name="source" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Source
        </option>
        <option value="API">API</option>
        <option value="BD">BD</option>
      </select>
      <select className={styles.select} name="diets" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          filter by type of diet
        </option>
        {diets.map((diet) => (
          <option key={diet.id} value={diet.name}>
            {diet.name}
          </option>
        ))}
      </select>
      <select className={styles.select} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Order alphabetically
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select className={styles.select} name="option" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Order By healthScore
        </option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
}

export default FilterBar;
