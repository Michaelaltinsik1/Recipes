import express from "express";
import {
  getCategories,
  getRecipesByCategory,
  getRecipesByCategoryAndSearch,
} from "../db/category";
const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  const categories = await getCategories();
  res.json(categories);
  //res.send("get all categories");
});

router.get(
  "/:categoryName/recipes",
  async (req: express.Request, res: express.Response) => {
    const params = req.params;
    const query = req.query;
    if (Object.keys(query).length > 0) {
      let categoryName = params.categoryName;
      let queryString = query.search;
      console.log(typeof queryString);
      if (typeof queryString === "string") {
        const recepiesFetched = await getRecipesByCategoryAndSearch(
          queryString,
          categoryName
        );
        res.json(recepiesFetched);
      } else {
        res.send("Not found");
      }
    } else {
      let categoryName = params.categoryName;
      const recipesByCategory = await getRecipesByCategory(categoryName);
      res.json(recipesByCategory);
    }
  }
);

export default router;
