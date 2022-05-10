export interface RecipeType {
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
