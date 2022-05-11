import Recipe from "./Recipe";
import { RecipeType } from "../types/RecipeType";

const RecipesList = (props: {
  recipes: RecipeType[];
  handleNavigation: Function;
}) => {
  if (props.recipes.length > 0) {
    return (
      <section>
        {props.recipes.map((recipe: RecipeType) => (
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
