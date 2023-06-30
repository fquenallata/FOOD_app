import NavBar from "../../components/NavBar/NavBar.component.jsx";
import Recipes from "../../components/Recipes/Recipes.component.jsx";
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

  // const originFilterHandler = (e) => {
  //   e.preventDefault();
  //   const filtered = allRecipes.filter(
  //     (recipe) => recipe.recipeFrom === e.target.value
  //   );
  //   setFilteredRecipes(filtered);
  // };

  // useEffect(() => {
  //   setFilteredRecipes(allRecipes);
  // }, [allRecipes]);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <p>Estas en el Home</p>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Recipes allRecipes={allRecipes} />
    </div>
  );
}

export default Home;
