import Recipe from "./Recipe";

// interface RecipeType {
//   title?: string;
//   description?: string;
//   imageURL?: string;
//   timeInMins?: number;
//   ratings?: number[];
//   categories?: [category: string];
//   ingredients?: [
//     {
//       ingredient: string;
//       amount: number;
//       unit: string;
//     }
//   ];
//   instructions?: [
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

const RecipesList = ({ recipes }: any) => {
  // console.log("recipes:", recipes);
  if (recipes.length > 0) {
    return (
      <section>
        {recipes.map((recipe: any) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </section>
    );
  } else {
    return <p>No recipes were found</p>;
  }
};

export default RecipesList;
