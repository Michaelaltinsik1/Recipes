import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipesById, postRating } from "../API/recipes";
import Recipe from "../Components/Recipe";
import IngredientsList from "../Components/IngredientsList";
import InstructionsList from "../Components/InstructionsList";
import { RecipeType } from "../types/RecipeType";
import Vote from "../Components/Vote";
const Recipepage = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState<RecipeType>();
  const [isRated, setRatedState] = useState<boolean>(false);
  const [currVote, setVote] = useState<number>(-1);
  useEffect(() => {
    const getRecipeById = async () => {
      if (params.recipeId) {
        let id: string = params.recipeId;
        let recipeById = await fetchRecipesById(id);
        // await postRating(id, 8);
        setRecipe(recipeById.data);
      }
    };
    getRecipeById();
  }, [params]);
  useEffect(() => {
    if (currVote > 0) {
      const postRecipeById = async () => {
        console.log("You gave this recipe a rating of: ", currVote);
        if (params.recipeId) {
          await postRating(params.recipeId, currVote);
        }
      };
      postRecipeById();
      // setVote(-1);
    }
  }, [currVote, params]);
  // return <Recipe recipe={recipe} />;

  function handleVote(value: number) {
    console.log(`Rated ${value}!`);
    setVote(value);
    setRatedState(true);
  }
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
      <article>
        <Vote isVoted={isRated} handleVote={handleVote} />
      </article>
    </>
  );
};

export default Recipepage;
