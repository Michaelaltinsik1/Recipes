import Recipe from "./Recipe";
import { RecipeType } from "../types/RecipeType";
import { useAppSelector } from "../App/hooks";
const RecipesList = (props: { handleNavigation: Function }) => {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  if (recipes.length > 0) {
    return (
      <section>
        {recipes.map((recipe: RecipeType) => (
          <Recipe
            key={recipe._id}
            recipe={recipe}
            handleNavigation={props.handleNavigation}
          />
        ))}
      </section>
    );
  } else {
    return <p>No recipes were found</p>;
  }
};

export default RecipesList;
