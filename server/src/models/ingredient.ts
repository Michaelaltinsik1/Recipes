import { Schema, model } from "mongoose";

interface Ingredient {
  ingredient: string;
  amount: number;
  unit: string;
}

const schema = new Schema<Ingredient>({
  ingredient: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String, required: true },
});

const CategoryModel = model<Ingredient>("Ingredient", schema);

export default CategoryModel;
