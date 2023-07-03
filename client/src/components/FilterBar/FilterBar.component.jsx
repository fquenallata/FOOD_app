import styles from "./FilterBar.module.css";
import { Link } from "react-router-dom";

function FilterBar() {
  return (
    <div className={styles.filterBarContainer}>
      {/* botones */}
      <button>refresh</button>
      <Link to={`/postRecipe`}>
        <button>create</button>
      </Link>
      {/* filtros son 4 select*/}
      <select className={styles.select} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select className={styles.select} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select className={styles.select} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select className={styles.select} name="order" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </div>
  );
}

export default FilterBar;
