import FilterBar from "../../components/FilterBar/FilterBar.component.jsx";
import Recipes from "../../components/Recipes/Recipes.component.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.component.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getRecipesByName } from "../../redux/actions/actions.js";

function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.allRecipes);
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipesByName(searchString));
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  console.log(allRecipes);

  return (
    <div>
      <p>Estas en el Home</p>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <FilterBar />
      <Recipes allRecipes={allRecipes} />
    </div>
  );
}

export default Home;
