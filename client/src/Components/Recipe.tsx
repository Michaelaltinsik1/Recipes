import { RecipeType } from "../types/RecipeType";
import Stars from "./Stars";

const Recipe = (props: {
  recipe: RecipeType;
  handleNavigation?: Function;
  page?: string;
}) => {
  return (
    <article
      onClick={() => {
        if (props.recipe._id) handleClick(props.recipe._id);
      }}
    >
      <h1>{props.recipe.title}</h1>
      <p>{props.recipe.description}</p>
      {<p>{props.recipe.ingredients.length} INGREDIENTS</p>}
      <p>{props.recipe.timeInMins} MINUTES</p>
      <Stars starCount={getAvgRating(props.recipe.ratings)} />
      <img
        src={props.recipe.imageURL}
        alt={props.recipe.title}
        width="300"
        height="200"
      />
      {props.page && <h1>Hello</h1>}
    </article>
  );
  function handleClick(id: string) {
    if (props.handleNavigation) {
      props.handleNavigation(id);
    }
  }
  function getAvgRating(raitings: Array<number>) {
    let sum = 0;
    raitings.map((raiting): number => (sum += raiting));
    return Math.round(sum / raitings.length);
  }
};

export default Recipe;
