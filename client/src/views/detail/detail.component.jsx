import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions/actions.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const dispatch = useDispatch();
  const { detailId } = useParams();
  const recipe = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(getRecipeById(detailId));
  }, []);

  return (
    <div>
      <p>Estas en el Detail</p>
    </div>
  );
}

export default Detail;
