import { Schema, model } from "mongoose";

interface Recipe {
  title: string;
  description: string;
  imageURL: string;
  timeInMins: number;
  ratings: number[];
  categories: [category: string];
  ingredients: [
    {
      ingredient: string;
      amount: number;
      unit: string;
    }
  ];
  instructions: [
    {
      instruction: string;
      prio: number;
    }
  ];
  comments?: [
    {
      comment: string;
      name: string;
      createdAt: Date;
    }
  ];
}

const schema = new Schema<Recipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  timeInMins: { type: Number, required: true },
  ratings: { type: [Number], required: true },
  categories: { type: [String], required: true },
  ingredients: {
    type: [
      {
        ingredient: String,
        amount: Number,
        unit: String,
      },
    ],
    required: true,
  },
  instructions: {
    type: [
      {
        instruction: String,
        prio: Number,
      },
    ],
    required: true,
  },
  comments: {
    type: [
      {
        comment: String,
        name: String,
        createdAt: Date,
      },
    ],
    required: false,
  },
});

const RecipeModel = model<Recipe>("Recipe", schema);

export default RecipeModel;
