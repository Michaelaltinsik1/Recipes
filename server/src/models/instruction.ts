import { Schema, model } from "mongoose";

interface Instruction {
  instruction: string;
  prio: number;
}

const schema = new Schema<Instruction>({
  instruction: { type: String, required: true },
  prio: { type: Number, required: true },
});

const CategoryModel = model<Instruction>("Instruction", schema);

export default CategoryModel;
