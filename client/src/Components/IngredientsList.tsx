import Ingredient from "./Ingredient";

interface IngredientsType {
  ingredients: [{ ingredient: string; amount: number; unit: string }];
}
interface IngredientType {
  ingredient: string;
  amount: number;
  unit: string;
}

const IngredientsList = ({ ingredients }: IngredientsType) => {
  return (
    <ul>
      {ingredients.map((ingredient: IngredientType) => (
        <Ingredient
          key={ingredient.ingredient}
          ingredient={ingredient.ingredient}
        />
      ))}
    </ul>
  );
};
export default IngredientsList;
