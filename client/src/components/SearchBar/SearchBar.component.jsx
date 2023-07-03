import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const { handleChange, handleSubmit } = props;
  return (
    <div className={styles.searchBarContainer}>
      <form onChange={handleChange}>
        <input placeholder="Busqueda" type="search"></input>
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
