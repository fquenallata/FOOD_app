import styles from "./NavBar.module.css";

function NavBar(props) {
  const { handleChange, handleSubmit } = props;
  return (
    <div className={styles.navBarContainer}>
      <form onChange={handleChange}>
        <input placeholder="Busqueda" type="search"></input>
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
      {/* <select
        onChange={originFilterHandler}
        name="filter"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select Origin
        </option>
        <option value="BD">FromBD</option>
        <option value="Api">FromApi</option>
      </select> */}
    </div>
  );
}

export default NavBar;
