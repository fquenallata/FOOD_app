import NavBar from "../../components/NavBar/NavBar.component.jsx";
import Recipes from "../../components/Recipes/Recipes.component.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/actions.js";

function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.allRecipes);
  // const [filteredRecipes, setfilteredRecipes] = useState(allRecipes);
  // const [searchString, setSearchString] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   searchString = e.target.value;
  // };

  // const handleSubmit = (e) => {
  //   const filtered = allRecipes.filter();
  // };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <p>Estas en el Home</p>
      <NavBar />
      <Recipes allRecipes={allRecipes} />
    </div>
  );
}

export default Home;
