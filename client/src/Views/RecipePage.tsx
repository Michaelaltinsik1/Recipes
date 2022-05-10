import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipesById } from "../API/recipes";
import Recipe from "../Components/Recipe";
import IngredientsList from "../Components/IngredientsList";
import InstructionsList from "../Components/InstructionsList";
import { RecipeType } from "../types/RecipeType";

const Recipepage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();
  //   title: "",
  //   description: "",
  //   imageURL: "",
  //   timeInMins: 0,
  //   ratings: [],
  //   categories: [""],
  //   ingredients: [
  //     {
  //       ingredient: "",
  //       amount: 0,
  //       unit: "",
  //     },
  //   ],
  //   instructions: [
  //     {
  //       instruction: "",
  //       prio: 0,
  //     },
  //   ],
  // });
  useEffect(() => {
    const getRecipeById = async () => {
      let id: any = params.recipeId;
      let recipeById = await fetchRecipesById(id);
      setRecipe(recipeById.data);
    };
    getRecipeById();
  }, [params]);
  // return <Recipe recipe={recipe} />;
  return (
    <>
      {recipe && <Recipe recipe={recipe} page={"recipePage"} />}
      {recipe && (
        <article>
          <h2>Ingredients</h2>
          <IngredientsList ingredients={recipe.ingredients} />
        </article>
      )}
      <article>
        <h2>Instructions</h2>
        <InstructionsList instructions={recipe?.instructions} />
      </article>
    </>
  );
};

export default Recipepage;
