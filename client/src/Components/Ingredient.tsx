interface IngredientType {
  ingredient: string;
}

const Ingredient = ({ ingredient }: IngredientType) => {
  return <li> {ingredient}</li>;
};
export default Ingredient;
