// interface RecipeType {
//   title: string;
//   description: string;
//   imageURL: string;
//   timeInMins: number;
//   ratings: number[];
//   categories: [category: string];
//   ingredients: [
//     {
//       ingredient: string;
//       amount: number;
//       unit: string;
//     }
//   ];
//   instructions: [
//     {
//       instruction: string;
//       prio: number;
//     }
//   ];
//   comments?: [
//     {
//       comment: string;
//       name: string;
//       createdAt: Date;
//     }
//   ];
// }

const Recipe = ({ recipe }: any) => {
  return (
    <article>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* <p>{recipe.ingredients.length} INGREDIENTS</p> */}
      <p>{recipe.timeInMins} MINUTES</p>
      <img src={recipe.imageURL} alt={recipe.title} width="300" height="200" />
    </article>
  );
};

export default Recipe;
