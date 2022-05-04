// import { Schema, model } from "mongoose";

// interface Recipe {
//   title: string;
//   desctription: string;
//   imageURL: string;
//   timeInMins: number;
//   ratings: number[];
//   categories: [categoryId: string];
//   ingredients: [ingredientId: string];
//   instructions: [instructionId: string];
//   comments?: [commentId: string];
// }

// const schema = new Schema<Recipe>({
//   title: { type: String, required: true },
//   desctription: { type: String, required: true },
//   imageURL: { type: String, required: true },
//   timeInMins: { type: Number, required: true },
//   ratings: { type: [Number], required: true },
//   categories: { type: [String], required: true },
//   ingredients: { type: [String], required: true },
//   instructions: { type: [String], required: true },
//   comments: { type: [String], required: false },
// });

// const RecipeModel = model<Recipe>("Recipe", schema);

// export default RecipeModel;
