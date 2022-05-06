import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipesById } from "../API/recipes";
import Recipe from "../Components/Recipe";

const Recipepage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    const getRecipeById = async () => {
      let id: any = params.recipeId;
      let recipeById = await fetchRecipesById(id);
      setRecipe(recipeById.data);
    };
    getRecipeById();
  }, [params]);
  // return <Recipe recipe={recipe} />;
  return <>{recipe && <Recipe recipe={recipe} />}</>;
};

export default Recipepage;
