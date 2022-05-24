import Ingredient from "./Ingredient";
import { useAppSelector } from "../App/hooks";
import { RecipeType } from "../types/RecipeType";

interface IngredientType {
  ingredient: string;
  amount: number;
  unit: string;
}

const IngredientsList = () => {
  const recipe = useAppSelector<RecipeType | null>(
    (state) => state.recipes.singleRecipe
  );
  if (recipe) {
    return (
      <ul>
        {recipe?.ingredients.map((ingredient: IngredientType) => (
          <Ingredient
            key={ingredient.ingredient}
            ingredient={ingredient.ingredient}
          />
        ))}
      </ul>
    );
  } else {
    return <></>;
  }
};
export default IngredientsList;
